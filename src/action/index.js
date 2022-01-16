import Axios from "axios";
export function selectedStyles(props, tag = "span", href = false, styles = false) {
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
    try {
      props.find.replaceWith(el);
    } catch (error) {
      //  console.log(error)
    }
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

export function storageBdInsert(props = {}) {
  let content = props.content.replace(/[\n]/g, ",");
  return Axios.get(`${props.url}?fonts=${content}`);
}


export function arrayFonts(props = {getFonts:"",n:[]}) {
  if (props.getFonts !== undefined) {
    if (props.getFonts !== null) {
      return props.getFonts.split(",").concat(props.n);
    } else {
      return props.n;
    }
  }
}

export function replaceFontsTextarera(props = {}) {
  if (props.getFonts !== null) {
    return props.getFonts.replace(/[","]/g, "\n");
  } else {
    return "";
  }
}

export function titlesContents(props) {
  if (props.type) {
    return props.type;
  } else {
    return "Нет описания";
  }
}

export function typeStyle(t, g, o) {
  if (o === "button") {
    if (t === g) {
      return { backgroundColor: "rgb(239, 241, 245)", border: "none" };
    } else {
      return { border: "none" };
    }
  } else if (o === "svg") {
    if (t === g) {
      return { backgroundColor: "rgb(239, 241, 245)" };
    } else {
      return {};
    }
  } else {
    return {};
  }
}

export function createTable(
  props,
  row,
  col,
  params = { width: "100%", float: "none" }
) {
  let table = document.createElement("table");
  table.setAttribute("class", "tbl");
  table.setAttribute("style", `width:${params.width}; float:${params.float};`);
  countArray(row).map((x) => {
    let tr = document.createElement("tr");
    countArray(col).map((x2) => {
      let td = document.createElement("td");
      td.setAttribute("class", "itemsTd");
      return tr.appendChild(td);
    });
    return table.appendChild(tr);
  });
  if (props.find !== undefined && props.find.tagName !== undefined) {
    return props.find.appendChild(table);
  }
}

export function isMetod(obj,m) {
let j = Object.getOwnPropertyNames(obj);
return j.filter((x)=>x === m).length > 0?true:false;
}

export function colorSvg(select,elements,attr,fill) {
let l = document.querySelector("." + select + "");
 return  Object.values(l.children).filter((el) => el.tagName === elements).map((x) =>x.setAttribute(attr,fill));
}