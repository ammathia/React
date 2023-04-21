import React from "react";
import PropTypes from "prop-types";


export default function Header({text="Default"}) {
    return (
        <header className="App-header">
            {text}

        </header>
    )
}
Header.propTypes = {
    text: PropTypes.string
}

