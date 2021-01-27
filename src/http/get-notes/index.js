require = require('esm')(module) // eslint-disable-line
const arc = require('@architect/functions')
const data = require('@begin/data')
const Notes = require('@architect/views/pages/notes.js').default
const HTML = require('@architect/views/document/html.js').default

exports.handler = arc.http.async(notes)

async function notes(req) {
  let session = req.session || {}
  let account = session.account || {}
  let accountId = account.id

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

    return {
      statusCode: 200,
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8'
      },
      body: HTML({
        title: 'Notes Demo',
        children: Notes({
          account: {
            avatar: account.avatar,
            name: account.name,
            url: `https://github.com/${account.login}`
          },
          notes
        })
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
