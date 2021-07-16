export function selectedStyles(props, tag, href = false) {
  function replaceSelected(props) {
    let range = window.getSelection();

    var documentFragment = range.getRangeAt(0).extractContents();
    let b = document.createElement(tag);

    if (href !== false) {
      b.setAttribute("href", href);
    }
    b.appendChild(documentFragment);
    range.getRangeAt(0).insertNode(b);
  }
  if (props.selectedtext) {
    return replaceSelected(props);
  }
}

export function countArray(n) {
  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = i;
  }
  return a;
}
