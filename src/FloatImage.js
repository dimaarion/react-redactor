import React from "react";

function FloatImage(props) {
    return (
        <div className="col-8 form-group text-left p-0">
            <div className = "row">
                <svg onClick={() => props.setimgFloat("left")} width="3em" viewBox="0 14 40 40" className="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <line x1={0} y1={20} x2={30} y2={20} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={18} x2={30} y2={18} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={16} x2={30} y2={16} strokeWidth=".5" stroke="currentColor" />
                    <line x1={17} y1={14} x2={30} y2={14} strokeWidth=".5" stroke="currentColor" />
                    <line x1={17} y1={12} x2={30} y2={12} strokeWidth=".5" stroke="currentColor" />
                    <line x1={17} y1={10} x2={30} y2={10} strokeWidth=".5" stroke="currentColor" />
                    <line x1={17} y1={8} x2={30} y2={8} strokeWidth=".5" stroke="currentColor" />
                    <line x1={17} y1={6} x2={30} y2={6} strokeWidth=".5" stroke="currentColor" />
                    <line x1={17} y1={4} x2={30} y2={4} strokeWidth=".5" stroke="currentColor" />
                    <line x1={17} y1={2} x2={30} y2={2} strokeWidth=".5" stroke="currentColor" />
                </svg>
                <svg onClick={() => props.setimgFloat("right")} width="5em" viewBox="-15 0 70 70" className="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M28 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L29 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <line x1={0} y1={20} x2={30} y2={20} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={18} x2={30} y2={18} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={16} x2={30} y2={16} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={14} x2={13} y2={14} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={12} x2={13} y2={12} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={10} x2={13} y2={10} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={8} x2={13} y2={8} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={6} x2={13} y2={6} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={4} x2={13} y2={4} strokeWidth=".5" stroke="currentColor" />
                    <line x1={0} y1={2} x2={13} y2={2} strokeWidth=".5" stroke="currentColor" />
                </svg>
            </div>

        </div>
    );
}
export default FloatImage;