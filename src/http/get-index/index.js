require = require('esm')(module) // eslint-disable-line
const arc = require('@architect/functions')
const Login = require('@architect/views/pages/login.js').default
const HTML = require('@architect/views/document/html.js').default

exports.handler = arc.http.async(index)

async function index(req) {
  let { session={} } = req
  let { account={} } = session
  let { id: accountId } = account

  if (accountId) {
    return {
      statusCode: 302,
      location: '/notes'
    }
  } else {
    let clientID = process.env.GITHUB_CLIENT_ID
    let redirectURL = process.env.GITHUB_REDIRECT
    let href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_url=${redirectURL}`

    return {
      statusCode: 200,
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8'
      },
      body: HTML({
        static,
        title: 'Notes Demo',
        children: Login({
          href
        })
      })
    }
  }
}
