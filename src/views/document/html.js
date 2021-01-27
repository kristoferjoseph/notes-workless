import Styles from './styles.js'

export default function HTML(state={}) {
  let {
    children='',
    scripts='',
    title=''
  } = state
  return `
<!DOCTYPE html>
<html
  lang="en"
  class="h-full"
>
<head>
  <meta charset="UTF-8">
  <title>${ title }</title>
  <link
    rel="preload"
    href="/_static/syntax.css"
    as="style"
    onload="this.onload=null;this.rel='stylesheet'"
  >
  <noscript>
    <link rel="stylesheet" href="/_static/syntax.css">
  </noscript>
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
