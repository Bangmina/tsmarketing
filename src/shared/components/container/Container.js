import React from "react";
import { Link } from "react-router-dom";
import "./container.scss";

const Container = ({ children, sectionName }) => {
	return <section className={`container ${sectionName}`}>{children}</section>;
};

export default Container;
