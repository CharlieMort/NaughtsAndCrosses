import React from "react";

const Cell = ({value, clickFunc}) => {
    return(
        <div className="cell">
            <button onClick={clickFunc}>{value}</button>
        </div>
    )
}

export default Cell;