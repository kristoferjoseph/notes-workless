import Styles from './styles.js'
import StyleSheet from './stylesheet.js'

export default function HTML(state={}) {
  let {
    children='',
    scripts='',
    title='',
    stylesheets=[]
  } = state
  let sheets = stylesheets.map(sheet => StyleSheet({ sheet })).join('')
  return `
<!DOCTYPE html>
<html
  lang="en"
  class="h-full"
>
<head>
  <meta charset="UTF-8">
  <title>${ title }</title>
  ${ sheets }
  ${ Styles() }
</head>
<body
  class="
    h-full
    font-sans
    bg-g10
    text-g0
    overflow-hidden
  "
>
  ${ children }
  ${ scripts }
</body>
</html>
  `
}
