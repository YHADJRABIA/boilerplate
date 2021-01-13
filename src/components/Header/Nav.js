import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ navTitles, languages, i18n }) => {
  const [isToggled, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!isToggled);
  };

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <nav>
      {/*         <div className="flags">
          {languages.map((lang) => (
            <img
              className="flag"
              onClick={changeLanguage(lang.code)}
              src={`https://flagcdn.com/w40/${lang.flag}.png`}
              srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
              width="40"
              alt={lang.name}
              title={lang.name}
              key={lang.id}
            ></img>
          ))}
        </div> */}

      <ul className="nav-links">
        {/*         {navTitles.map((navTitle) => (
          <Link to={"/" + navTitle.path} key={navTitle.id}>
          <li key={navTitle.id}>
            <a href={navTitle.path} title={navTitle.name} key={navTitle.id}>
              {navTitle.name}
            </a>
          </li>
          </Link>
        ))} */}
      </ul>
    </nav>
  );
};

export default Nav;
