import React from "react";

function Italic(props) {

    return (
        <div className={props.class}>
            <svg onClick={() => props.types(props.ititalTegs, props.items, props.selectedtext, 'i')} width="2em" viewBox="0 0 16 16" className="bi bi-type-italic" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
            </svg>
        </div>
    );
}
export default Italic;