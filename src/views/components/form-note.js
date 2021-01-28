export default function NoteForm(state={}) {
  let { classes='', cursor={} } = state
  let { key='', title='', text='' } = cursor
  return `
<form
  method=POST
  action=/notes
  class="
   flex
   flex-col
   ${ classes }
  "
>
  <input
    class="
      p-2
      mb1
      text0
      text-g0
      border-solid
      border1
      border-g9
      radius0
      bg-g8
    "
    name=title
    type=text
    placeholder="Title your note"
    value="${ title }"
    required
  >
  <textarea
    class="
      p-2
      mb1
      text0
      text-g0
      border-solid
      border1
      border-g9
      radius0
      bg-g8
    "
    name=text
    rows=10
    cols=30
    placeholder="Write your note in Markdown!"
    required
  >${ text }</textarea>
  <input type=hidden name=key value=${ key }>
  <div
    class="
      flex
      justify-end
    "
  >
    <button
      class="
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
      "
    >
      Save
    </button>
  </div>
</form>
  `
}
