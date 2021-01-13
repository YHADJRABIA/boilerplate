import React, { useState, useContext } from "react";
import { DataContext } from "../components/Context/DataContext";
import { useTranslation } from "react-i18next"; // Translation module
const Footer = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();

  return <footer></footer>;
};

export default Footer;
