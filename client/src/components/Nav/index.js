import React from 'react';

function Nav() {

    return (
      <header>
        <h1 className = "header-title">Muzik</h1>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href = "#about">About Muzik</a>
                    </li>
                    <li className="mx-2">
                        <a href = "#contact-us">Reach Out</a>
                    </li>
                    <li className="mx-2">
                        <a href = "#contributions">Donate to the Cause</a>
                    </li>
                    <li className="mx-2">
                        <a href = "#rated">Rated Bands</a>
                    </li><li className="mx-2">
                        <a href = "#snips">LIVE Snippets</a>
                    </li>
            </ul>
        </nav>
      </header>
    );
}

export default Nav;