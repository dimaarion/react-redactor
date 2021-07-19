export function selectedStyles(props, tag, href = false, styles = false) {
  function replaceSelected() {
    let range = window.getSelection();

    var documentFragment = range.getRangeAt(0).extractContents();
    let b = document.createElement(tag);

    if (href !== false) {
      b.setAttribute("href", href);
    }
    if (styles !== false) {
      b.setAttribute("style", styles);
    }

    b.appendChild(documentFragment);
    range.getRangeAt(0).insertNode(b);
  }
  if (props.selectedtext) {
    return replaceSelected();
  }
}

export function countArray(n) {
  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = i;
  }
  return a;
}

export function replaceElement(props) {
  if (props.find !== undefined) {
    let find = props.find.innerHTML;
    let el = document.createElement(props.t);
    el.insertAdjacentHTML("afterbegin", find);
    props.find.replaceWith(el);
  }
}

export function addCell(props) {
  if (props.find !== undefined && props.find.tagName === "TD") {
    let par = props.find.parentElement;
    let td = document.createElement("td");
    td.setAttribute("class", "itemsTd");
    td.setAttribute("style", "width:100px;height:50px;");
    par.appendChild(td);
  }
}

export function deleteCell(props) {
  if (props.find !== undefined && props.find.tagName === "TD") {
    return props.find.remove();
  }
}

export function addStr(props) {
  if (props.find !== undefined && props.find.tagName === "TD") {
    let par = props.find.parentElement;
    if (par.parentElement.tagName === "TABLE") {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      tr.appendChild(td);
      tr.setAttribute("class", "tableTrN");
      td.setAttribute("class", "itemsTd");
      return par.parentElement.appendChild(tr);
    }
  }
}

export function deleteStr(props) {
  if (props.find !== undefined && props.find.tagName === "TD") {
    let par = props.find.parentElement;
    if (par.tagName === "TR") {
      return par.remove();
    }
  }
}
export function rgb2hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
