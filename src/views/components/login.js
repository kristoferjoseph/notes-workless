export default function Login(state={}) {
  let { href } = state
  return `
<a
  href=${href}
  class="
    pt0
    pr4
    pb0
    pl4
    text1
    text-g9
    font-bold
    border-solid
    border1
    border-g10
    border-h0
    border-a2
    radius0
    bg-p0
    cursor-pointer
    no-underline
  "
  target=_self
>
  Login with GitHub
</a>
  `
}
