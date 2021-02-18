export default function StyleSheet(state={}) {
  let { sheet } = state
  return `
<link
  rel="preload"
  href="${ sheet }"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
>
<noscript>
  <link rel="preload" href="${ sheet }" as="style">
  <link rel="stylesheet" href="${ sheet }">
</noscript>
  `
}
