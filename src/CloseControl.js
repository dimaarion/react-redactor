import React from "react";
import Sizeplus from './Sizeplus';
import Sizeminus from './Sizeminus';
function CloseControl(props) {

    return (
        <div
            className="col-sm-1 sizes"
            onClick={() => props.setsizes(props.sizes === true ? false : true)}
        >
            <div> {props.sizes === true ? <Sizeplus /> : <Sizeminus />}</div>
        </div>
    );
}
export default CloseControl;
