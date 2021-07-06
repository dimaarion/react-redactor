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
      let textSelectArr = props.selectedtext.split("");
      let textSelect = props.selectedTextFocus;
      let rezText = text.length - textSelect;

      console.log(text + " ~ " + textSelectArr);

      // console.log(regex);
      text.map((j) => {
        let ind = props.selectedtext.indexOf(j);
        if (ind) {
          //console.log(ind);
          /*console.log(
            rezText +
              " ~ " +
              text.length +
              " ~ " +
              textSelect +
              " ~ " +
              text +
              " ~ " +
              textSelectArr +
              " ~ " +
              j
          );*/
        }
      });

      for (let i = props.selectedTextAncor; i < props.selectedTextFocus; i++) {
        //console.log(textSelectArr[i]);
      }

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
