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
<div
 class="
  h-full
  flex
  flex-col
 "
>
  <ul
    class="
      list-none
      flex-grow
    "
  >
    ${ items }
  </ul>
  <div>
    <a
      class="
       text-center
       block
       pt-1
       pr2
       pb-1
       pl2
       text0
       text-g9
       font-bold
       border-solid
       border1
       border-g8
       border-h0
       border-a2
       radius0
       bg-p0
       cursor-pointer
       no-underline
      "
      href="/notes"
    >
      Add note
    </a>
  </div>
</div>
    `
}
