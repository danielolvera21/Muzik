import React from 'react';

function Nav() {

    //array for nav bar, can reference information elsewhere
    const categories = [
        {
          name: "Bands",
          description:"List of rated bands",
        },
        { 
          name: "Upcoming Shows",
          description: "Get a list of upcoming shows in your area"
        },
      ];

      //onclick function
      function categorySelected(name) {
          console.log(`${name} clicked`)
      }

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

                    {categories.map((category) => (
                        //define onclick event in span with onclick method, define function above return
                        <li className= "mx-2" key ={category.name}>
                            <span onClick={() => categorySelected(category.name)} > {category.name}</span>
                        </li>
                    ))}
            </ul>
        </nav>
      </header>
    );
}

export default Nav;