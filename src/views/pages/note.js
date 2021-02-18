import TwoColumn from '../layout/two-column.js'
import Header from '../components/header.js'
import List from '../components/list.js'
import Empty from '../components/empty-notes.js'
import NoteForm from '../components/form-note.js'
import dateFormat from '../helpers/format-date.js'

export default function Notes(state={}) {
  let { account, cursor, edit=false, notes=[] } = state
  let {
    avatar,
    name,
    url
  } = account

  let list = notes.length
    ? `
<div
 class="
  flex
  flex-col
  pr1
  pb1
  pl1
 "
>
  <div
    class="
      sticky
      top0
      right0
      left0
      pt1
      bg-g10
    "
  >
    <a
      class="
       text-center
       block
       mb2
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
       border-a1
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
  ${List(state)}
</div>
`
    : Empty()

  function Content(state={}) {
    let { cursor={} } = state
    let { created, title, preview, updated } = cursor
    return `
<div
  class="
    h-full
    flex
    flex-col
    m-auto
    p1
  "
>
  <div
    class="
      flex
      justify-between
      items-center
      mb1
    "
  >
    <p class="font-semibold">
      Last updated <span class="font-light">${ dateFormat(updated ? updated : created) }</span>
    </p>
    <a
      href="?edit=${!edit}"
      class="
        absolute
        right1
        pt-2
        pr0
        pb-2
        pl0
        block
        text-1
        text-g9
        font-bold
        border-solid
        border1
        border-g10
        border-h0
        border-a2
        radius-pill
        bg-p0
        cursor-pointer
        no-underline
        ${ edit ? 'active' : '' }
      "
      target=_self
    >
      ${ edit ? 'Cancel' : 'Edit' }
    </a>
  </div>
  <div
    class="
      flex
      flex-grow
      justify-between
    "
  >
    <div
      class="
        flex
        w-full
      "
    >
      <div
        class="
         w-full
         p1
        "
      >
        <h1
          class="
           mb-2
          "
        >
          ${ title }
        </h1>
        <p>
          ${ preview }
        </p>
      </div>
      ${
        edit
          ? NoteForm({
              cursor,
              legend: 'Update note'
            })
          : ''
      }
    </div>
  </div>
</div>
    `
  }

  return `
${
  TwoColumn({
    header: Header({
      avatar,
      name,
      url
    }),
    aside: list,
    main: Content({ cursor, show: edit })
  })
}
  `
}
