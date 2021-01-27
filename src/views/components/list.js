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
  relative
  h-full
 "
>
  <ul
    class="
      list-none
    "
  >
    ${ items }
  </ul>
  <a
    class="
     absolute
     flex
     items-center
     justify-center
     pr0
     pl0
     bottom0
     right0
     text3
     text-g9
     font-semibold
     border-solid
     border1
     border-g10
     border-h0
     border-a2
     radius-100
     bg-p0
     cursor-pointer
     no-underline
    "
    href="/notes"
  >
    +
  </a>
</div>
    `
}
