import Logo from './logo.js'
import Logout from './logout.js'

export default function Header(state={}) {
    let {
      avatar,
      name,
      url
    } = state

    return `
<div
  class="
    h-full
    flex
    items-center
    justify-between
    pr2
    pl2
    bg-g9
    text-g0
  "
>
  <h2
    class="
      flex
      items-center
    "
  >
    ${ Logo({ classes: 'mr-2 h-logo' }) }
    Notes
  </h2>
  <div
    class="
      flex
      items-center
    "
  >
    ${ Logout() }
    <a
      class="
        flex
        items-center
      "
      href="${url}"
    >
      <img
        alt="${name} avatar"
        class="
          w-avatar
          radius-100
          object-fit
        "
        src="${avatar}"
       >
    </a>
  </div>
</div>
    `
}
