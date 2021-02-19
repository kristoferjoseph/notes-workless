import TwoColumn from '../layout/two-column.js'
import FiftyFifty from '../layout/fifty-fifty.js'
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
  h-full
  p1
 "
>
  ${List(state)}
</div>
`
    : Empty()

  function EditContent(state={}) {
    let { cursor={} } = state
    let { created, title, preview, updated } = cursor
    return `
<div
  class="
    w-full
    h-full
    pt0
    pr1
    pb2
    pl1
  "
>
  ${
    NoteForm({
      cursor,
      edit,
      legend: 'Update note'
    })
  }
</div>
    `
  }

  function Preview(state={}) {
    let { created, preview, title, updated } = state
    return `
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
      `
  }

  function Controls(state={}) {
    let { edit=false } = state
    return `
<div
  class="
   col-start-1
   col-end-1
   p1
  "
>
  <a
    class="
     w-full
     text-center
     inline-block
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
<div
  class="
   p1
   col-start-2
   col-end-3
   text-right
  "
>
  <a
    href="?edit=${!edit}"
    class="
      col-start-2
      col-end-3
      inline-block
      mr-1
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
    "
    target=_self
  >
    ${ edit ? 'Cancel' : 'Edit' }
  </a>
</div>
    `
  }

  return edit
    ? FiftyFifty({
        header: Header({
          avatar,
          name,
          url
        }),
        aside: Preview(cursor),
        main: EditContent({ cursor })
      })
    : TwoColumn({
        header: Header({
          avatar,
          name,
          url
        }),
        aside: list,
        main: Preview(cursor),
        controls: Controls()
      })
}
