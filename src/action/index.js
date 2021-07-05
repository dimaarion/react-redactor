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
      let text = x.innerHTML.split("");
      text.map((j) => {
        let ind = props.selectedtext.indexOf(j);
        console.log(ind);
      });

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
