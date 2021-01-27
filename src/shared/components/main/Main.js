import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const Main = ({ children }) => {
	  return <main className="main">{children}</main>;

};

export default Main;
