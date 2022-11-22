import React from 'react';
import Nav from "./Nav";

function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <Nav />
            </div>
        </header>
    )
}

export default Header;