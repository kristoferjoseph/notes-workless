export default function NoteForm(state={}) {
  let { classes='', cursor={}, legend='Create note' } = state
  let { key='', title='', text='' } = cursor
  return `
<form
  method=POST
  action=/notes
  class="
    w-full
    h-full
    flex
  "
>
<fieldset
  class="
    w-full
    flex
    flex-col
    pt1
    pr2
    pb2
    pl2
    border-solid
    border1
    border-g9
    radius0
   ${ classes }
  "
  >
    <legend
      class="
        font-bold
        text1
        text-g8
        p-4
      "
    >
      ${ legend }
    </legend>
    <input
      autofocus
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
        flex-grow
        p-2
        mb1
        text0
        text-g0
        border-solid
        border1
        border-g9
        radius0
        bg-g8
        resize-none
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
  </fieldset>
</form>
  `
}
