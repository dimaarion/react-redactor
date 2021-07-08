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

      let text = x.innerHTML.split("");
      let textSelectArr = props.selectedtext.split("");
      let textSelect = props.selectedTextFocus;
      let rezText = text.length - textSelect;

      let ancor, n, t;
      if (!ancor) {
        ancor = 0;
      } else {
        ancor = props.selectedTextAncor;
      }
      if (textSelectArr.length < 1) {
        n = 1;
      } else {
        n = textSelectArr.length;
      }
      // console.log(x.innerHTML.match(regex));
      //console.log(
      // x.innerHTML.matchAll("/[<i>" + props.selectedtext + "</i>]/")
      //);
      //console.log(x.innerHTML.matchAll("<i>" + props.selectedtext));
      //console.log(x.innerHTML.matchAll(props.selectedtext + "</i>"));
      let reg = new RegExp(
        `[<i>||</i>]{${props.selectedTextAncor},${
          props.selectedTextAncor + n
        }}`,
        "g"
      );
      /*let child = x.childNodes[0].innerHTML;
      if (child) {
        child = x.childNodes[0].innerHTML;
      } else {
        child = x.innerHTML;
      }*/
      // t = child.replace(reg, "");
      //x.innerHTML = t;

      // console.log(
      // x.innerHTML.slice(props.selectedTextAncor, props.selectedTextAncor + n)
      //  );
      let selection = window.getSelection();
      // console.log(x.getAttribute("class"));
      //console.log(text);
      //let regex2 = new RegExp(`${props.selectedtext}`, "g");
      // let regex3 = new RegExp(`${x.innerHTML}{0,5}`, "g");
      let selectEl = window.getSelection().anchorOffset;
      let selectEl2 = window.getSelection().focusNode;

      text.map((j) => {
        let ind = props.selectedtext.indexOf(j);

        if (ind) {
          //console.log(ind);
        }
      });

      for (let i = props.selectedTextAncor; i < props.selectedTextFocus; i++) {
        //console.log(textSelectArr[i]);
      }

      x.innerHTML = x.innerHTML.replace(
        props.selectedtext,
        "<" + tag + " " + attr + ">" + props.selectedtext + "</" + tag + ">"
      );
    }

    props
      .ititalTegs()
      .filter((f, i) => i === props.items)
      .map((x) => replaceSelected(x));
  }
}
