import React, { useEffect } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Auth from "../../utils/auth";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <div className="loginStuff">
        <h1 className="header-title"><a href="/">Muzik</a></h1>
        <nav className="loginSpacing">
          <Router>
            {Auth.loggedIn() ? (
              <>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </Router>
        </nav>
      </div>
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