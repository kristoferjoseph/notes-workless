const arc = require('@architect/functions')
const data = require('@begin/data')
const sanitize = require('xss')

exports.handler = arc.http.async(notes)

async function notes(req) {
  let session = req.session || {}
  let account = session.account || {}
  let accountId = account.id
  let note = arc.http.helpers.bodyParser(req)

  if (note.created) {
    note.updated = new Date().toISOString()
  }
  else {
    note.created = new Date().toISOString()
  }
  // sanitize against xss attack
  note.title = sanitize(note.title)
  note.text = sanitize(note.text)

  if (accountId) {
    // If the note has a key
    //  then we are editing an existing note.
    let { key } = note
    let location = key
        ? `/notes/${key}`
        : `/notes`
    let table = `notes-${accountId}`
    await data.set({
      table,
      ...note
    })

    return {
      statusCode: 302,
      headers: {
        location,
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      }
    }
  }
  else {
    return {
      statusCode: 302,
      headers: {
        location: '/',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      }
    }
  }
}
