export function selectedStyles(props, tag, href = false) {
  if (props.selectedtext) {
    let attr = "href=" + href + "";
    if (href !== false) {
      attr = attr;
    } else {
      attr = "";
    }
    function replaceSelected(x) {
      let regex = new RegExp(`${props.selectedtext}`, "g");
      let reg = new RegExp(/[<i>]/, "g");
      let text = x.innerHTML.replace(reg, "");
      console.log(text);
      x.innerHTML = x.innerHTML.replace(
        regex,
        "<" + tag + " " + attr + ">" + props.selectedtext + "</" + tag + ">"
      );
    }

    props
      .ititalTegs()
      .filter((f, i) => i === props.items)
      .map((x) => replaceSelected(x));
  }
}
