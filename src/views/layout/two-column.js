export default function TwoColumn(state={}) {
  let { aside, header,  main } = state

  return `
<div
  class="
    h-full
    grid-lg
    two-column
    overflow-auto
  "
>
  ${ header }
  <aside
    class="
     col-start-1
     col-end-2
     overflow-auto
   "
  >
    ${ aside }
  </aside>
  <main
    class="
      col-start-2
      overflow-auto
    "
  >
    ${ main }
  </main>
</div>
  `
}


