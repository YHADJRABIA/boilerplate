import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../components/Context/DataContext";
import Nav from "./Header/Nav";
import { useTranslation } from "react-i18next";

const Header = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();
  return (
    <header>
      <Nav />
    </header>
  );
};

export default Header;
