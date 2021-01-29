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
    ? List(state)
    : Empty()

  function Content(state={}) {
    let { cursor={} } = state
    let { created, title, preview, updated } = cursor
    return `
<div
  class="
    container-lg
    m-auto
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
      Edit
    </a>
  </div>
  <div
    class="
      h-full
      flex
      justify-between
    "
  >
    <div
      class="
        flex
      "
    >
    ${ edit ? NoteForm({ classes: 'mr3', cursor }) : '' }
      <div
      >
        <h1
          class="
           mb-2
          "
        >
          ${ title }
        </h1>
        <p
        >
          ${ preview }
        </p>
      </div>
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
