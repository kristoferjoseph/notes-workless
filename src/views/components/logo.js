export default function Logo (props = {}) {
  let { classes } = props
  return `
<div
  class="fill-current ${classes}"
>
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m23.7.44c-13.03 0-23.63 10.6-23.63 23.63s10.6 23.63 23.63 23.63 23.63-10.6 23.63-23.63-10.61-23.63-23.63-23.63zm16.22 34.63c-3.68 5.41-9.71 8.62-16.23 8.62-6.49 0-12.52-3.2-16.2-8.57l16.2-15.78zm3.4-11c0 2.52-.48 4.99-1.44 7.34l-16.17-15.68c-1.11-1.11-2.92-1.12-4.02-.02l-16.16 15.75c-.97-2.37-1.46-4.85-1.46-7.39 0-10.82 8.81-19.63 19.63-19.63s19.62 8.8 19.62 19.63z" fill-rule="evenodd"></path></svg>
</div>
  `
}
