import Logo from '../components/logo.js'
import LoginForm from '../components/login.js'

export default function Login(state={}) {
  return `
<div
  class="
    pt5
    h-full
    flex
    flex-col
    items-center
  "
>
  <div>
    <h1
      class="
        flex
        items-center
        mb4
      "
    >
      ${ Logo({ classes: 'mr-2 h-logo' }) }
      Notes
    </h1>
  </div>
  ${ LoginForm(state) }
</div>
  `
}
