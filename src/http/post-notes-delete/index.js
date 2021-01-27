const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = arc.http.async(destroy)

async function destroy(req) {
  let session = req.session || {}
  let account = session.account || {}
  let accountId = account.id

  if (accountId) {
    let table = `notes-${accountId}`
    let key = arc.http.helpers.bodyParser(req).key

    await data.destroy({
      table,
      key
    })

    return {
      statusCode: 302,
      headers: {
        location: '/notes',
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

