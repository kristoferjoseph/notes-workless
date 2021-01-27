export default function TwoColumn(state={}) {
  let { aside, header,  main } = state

  return `
<div
  class="
    h-full-lg
    grid-lg
    two-column
  "
>
  ${ header }
  <aside
    class="
      p1
    "
  >
    ${ aside }
  </aside>
  <main
    class="
      h-full
      col-start-2
      p1
      overflow-auto
    "
  >
    ${ main }
  </main>
</div>
  `
}


