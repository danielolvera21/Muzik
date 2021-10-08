import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
      } = props;

    return (
      <header>
        <h1 className = "header-title">Muzik</h1>
            
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href = "#about" onClick = {() => setContactSelected(false)}>About Muzik</a>
                    </li>
                    <li className="mx-2">
                        <a href = "#contact-us" onClick = {() => setContactSelected(false)}>Reach Out</a>
                    </li>
                    <li className="mx-2">
                        <a href = "#contributions" onClick = {() => setContactSelected(true)}>Donate to the Cause</a>
                    </li>
                    <li className="mx-2">
                        <a href = "#rated" onClick = {() => setContactSelected(false)}>Rated Bands</a>
                    </li><li className="mx-2">
                        <a href = "#snips" onClick = {() => setContactSelected(false)}>LIVE Snippets</a>
                    </li>
            </ul>
        </nav>
      </header>
    );
    }

export default Nav;