import React from "react";
import { Link } from "react-router-dom";
import "./articleTitle.scss";

// const ArticleTitle = ({ section, title, subtitle }) => {
const ArticleTitle = (props) => {
	const { titClass, title, subtitle } = props;
	return (
		<section className={`subject ${titClass}`}>
			<h4 className="subject__title">{title}</h4>
			<p className="subject__subtitle">{subtitle}</p>
		</section>
	);
};

export default ArticleTitle;
