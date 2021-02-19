export default function Logo (props = {}) {
  let { classes } = props
  return `
<div
  class="fill-current ${classes}"
>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <circle cx="50" cy="50" r="50"/>
</svg>
</div>
  `
}

