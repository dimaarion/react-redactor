export function selectedStyles(props, tag, href = false) {
  if (props.selectedtext) {
    function replaceSelected(x) {
      let range = window.getSelection();

      var documentFragment = range.getRangeAt(0).extractContents();
      let b = document.createElement(tag);
      if (href !== false) {
        b.setAttribute("href", href);
      }
      b.appendChild(documentFragment);
      range.getRangeAt(0).insertNode(b);
    }

    props
      .ititalTegs()
      .filter((f, i) => i === props.items)
      .map((x) => replaceSelected(x));
  }
}
