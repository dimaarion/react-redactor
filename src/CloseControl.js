import React from "react";
import Sizeplus from './Sizeplus';
import Sizeminus from './Sizeminus';
function CloseControl(props) {

    return (
        <div
            className="col-sm sizes"
            onClick={() =>{return(props.setsizes(props.sizes === true ? false : true),props.setpanelStyle({ position: 'fixed',maxWidth: '100%' })) }}
        >
            <div> {props.sizes === true ? <Sizeplus /> : <Sizeminus />}</div>
        </div>
    );
}
export default CloseControl;
