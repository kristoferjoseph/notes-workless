import formatDate from '../helpers/format-date.js'

export default function List(state={ notes: [] }) {
  let { notes } = state
  let items = notes.map(n => {
    let { active, created, key, title } = n
    return `
    <li
      class="
        mb0
        border-solid
        border1
        border-g8
        border-h0
        border-a2
        radius0
        bg-g9
        cursor-pointer
        ${active ? 'active': ''}
      "
    >
      <a
        class="
          block
          pt-2
          pr1
          pb1
          pl1
          no-underline
          text-g0
        "
        href="/notes/${key}"
      >
        <h5 class="text1">${ title }</h5>
        <h6>${ formatDate(created) }</h6>
        <form
          method=POST
          action=/notes/delete
        >
          <input
            type="hidden"
            name=key
            value=${key}
          >
        </form>
      </a>
    </li>
    `
  }).join('')

  return `
<ul
  class="
    list-none
  "
>
  ${ items }
</ul>
    `
}
