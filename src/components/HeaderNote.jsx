import React from "react";
import SearchBar from "./SearchNotes";

function Header ({ onSearch }) {
    return (
        <div className="header-bar">
            <a className="header-title" href="/">myNotes</a>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Header;