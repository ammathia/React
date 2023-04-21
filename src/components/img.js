import React from "react";


export function Image(props) {
    const { src } = props;
    return(
        <div className="element">
            <img src={src} alt="a"></img>
            </div>
    )
}