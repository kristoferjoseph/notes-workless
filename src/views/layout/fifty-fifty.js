export default function TwoColumn(state={}) {
  let { aside='', controls='', header='',  main='' } = state

  return `
<div
  class="
    h-full
    grid-lg
    two-row
    fifty-fifty
  "
>
  <header
    class="
      sticky
      relative-lg
      top0
      col-start-1
      col-end-3
    "
  >
    ${ header }
  </header>
  <aside
    class="
      overflow-auto
      col-start-1
      col-end-2
   "
  >
    ${ aside }
  </aside>
  <main
    class="
      overflow-auto
      col-start-2
      col-end-2
    "
  >
    ${ main }
  </main>
  ${ controls }
</div>
  `
}


