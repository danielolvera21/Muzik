import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <h1 className="header-title"><a href="/">Muzik</a></h1>
      <h4 className="login-button"><a href="/">Log In</a></h4>
      <h4 className="signup-button"><a href="/">Sign Up</a></h4>

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