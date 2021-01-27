import TwoColumn from '../layout/two-column.js'
import Header from '../components/header.js'
import List from '../components/list.js'
import Empty from '../components/empty-notes.js'
import NoteForm from '../components/form-note.js'

export default function Notes(state={}) {
  let { account, cursor, notes=[] } = state
  let {
    avatar,
    name,
    url
  } = account

  let list = notes.length
    ? List(state)
    : Empty()

  function Content(state={}) {
    let { cursor={}, show=false } = state
    let { title, preview } = cursor
    return `
<div
  class="
    flex
  "
>
  ${ NoteForm({ classes: 'mr3', cursor, show }) }
  <div>
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
</div>
    `
  }

  return `
${ TwoColumn({
  header: Header({
    avatar,
    name,
    url
  }),
  aside: list,
  main: Content({ cursor })
})
}
  `
}
