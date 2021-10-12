import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <nav className="loginStuff">
      <h1 className="header-title"><a href="/">Muzik</a></h1>
      <div className = "loginSpacing">
      <a href="/">Log In</a>
      <a href="/">Sign Up</a>
      </div>
      </nav>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-2 ${currentCategory.name === category.name && "navActive"
                }`}
              key={category.name}
            >
              <span className="nav-buttons" onClick={() => { setCurrentCategory(category); }}>{capitalizeFirstLetter(category.name)}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;