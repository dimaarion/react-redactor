export function selectedStyles(props, tag) {
  if (props.selectedtext) {
    function replaceSelected(x) {
      let regex = new RegExp(
        props.selectedtext ||
          "<" + tag + ">" + props.selectedtext + "</" + tag + ">",
        "g"
      );

      x.innerHTML = x.innerHTML.replace(
        regex,
        "<" + tag + ">" + props.selectedtext + "</" + tag + ">"
      );
    }

    props
      .ititalTegs()
      .filter((f, i) => i === props.items)
      .map((x) => replaceSelected(x));
  }
}
