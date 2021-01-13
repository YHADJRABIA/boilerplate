import React, { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

//Holds the data to be provided. To be imported by App.js.
export const DataProvider = (props) => {
  const { t, i18n } = useTranslation();

  const content = {
    // Nav

    languages: [
      { name: i18n.t("languages.en"), code: "en", flag: "gb", id: 1 },
      { name: i18n.t("languages.fr"), code: "fr", flag: "fr", id: 2 },
    ],
    navTitles: [
      { name: i18n.t("navNames.about"), path: "#about", id: 1 },
      { name: i18n.t("navNames.skills"), path: "#skills", id: 2 },
      { name: i18n.t("navNames.portfolio"), path: "#portfolio", id: 3 },
    ],

    // Footer
    contactLinks: [
      {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/yacine-hadj-rabia-29b799158/",
        icon: "fab fa-linkedin",
        id: 1,
      },
      {
        name: "GitHub",
        path: "https://github.com/YHADJRABIA/",
        icon: "fab fa-github",
        id: 2,
      },
      {
        name: "Mail",
        path: "mailto:h_yacine@live.fr",
        icon: "fa fa-at",
        id: 3,
      },
    ],
  };

  /* 
  Passing the data to other components, we could list these components one by one but props.children is more efficient as it auto-selects all
  the children wrapped by <DataProvider> </DataProvider> in App.js.
  Passing navTitles as a value to be consumed by Nav.js
  */
  return (
    <DataContext.Provider value={content}>
      {props.children}
    </DataContext.Provider>
  );
};
