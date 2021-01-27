require = require('esm')(module) // eslint-disable-line
const arc = require('@architect/functions')
const data = require('@begin/data')
const MD = require('markdown-it')
const MDClass = require('@toycode/markdown-it-class')
const cssClassMap = require('./css-class-map')
const hljs = require('highlight.js')
const { escapeHtml } = MD().utils
const highlight = require('./highlighter')
  .bind(null, hljs, escapeHtml)
const Note = require('@architect/views/pages/note.js').default
const HTML = require('@architect/views/document/html.js').default

exports.handler = arc.http.async(note)

async function note(req) {
  let session = req.session || {}
  let account = session.account || {}
  let accountId = account.id
  let pathParameters = req.pathParameters || {}
  let noteId = pathParameters.id

  if (accountId) {
    let table = `notes-${accountId}`
    let pages = await data.get({
      table,
      limit: 25
    })

    let notes = []
    for await (let note of pages) {
      notes.push(note)
    }
    // Return oldest notes first
    notes.sort((a, b) => a.created > b.created)
    let note = notes.find(n => n.key === noteId)

    if (note) {
      note.active = true
    }
    else {
      return {
        statusCode: 302,
        location: '/'
      }
    }

    const md = MD({
      highlight,
      linkify: true,
      html: true,
      typography: true
    })
      .use(MDClass, cssClassMap)

    note.preview = md.render(note.text)

    return {
      statusCode: 200,
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8'
      },
      body: HTML({
        children: Note({
          account: {
            avatar: account.avatar,
            name: account.name,
            url: `https://github.com/${account.login}`
          },
          cursor: note,
          notes,
        }),
        stylesheets: [
          arc.static('syntax.css')
        ],
        title: 'Notes Demo'
      })
    }
  }
  else {
    return {
      statusCode: 302,
      location: '/'
    }
  }
}
