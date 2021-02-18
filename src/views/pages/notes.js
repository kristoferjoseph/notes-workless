import TwoColumn from '../layout/two-column.js'
import Header from '../components/header.js'
import List from '../components/list.js'
import Empty from '../components/empty-notes.js'
import NoteForm from '../components/form-note.js'

export default function Notes(state={}) {
  let { account, notes=[] } = state
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
  p1
 "
>
 ${List(state)}
</div>
  `
   : Empty()

  return `
${
TwoColumn({
  header: Header({
    avatar,
    name,
    url
  }),
  aside: list,
  main: `
<div class="p1">
  ${NoteForm()}
</div>
`
})
}
  `
}
