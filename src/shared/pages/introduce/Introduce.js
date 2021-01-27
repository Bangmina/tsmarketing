import React from "react";
import { Container } from "../../components";
import "./introduce.scss";

const Introduce = () => {
	return (
		// <section className="section__visual visual__main section">
		<Container>
			<div className="introduce">
				<div className="main__title--wrap">
					<div className="left__line"></div>
					<div className="main__title">
						<h3 className="section__title">티에스마케팅</h3>
						<p className="section__subtext">
							키워드 퍼포먼스 마케팅 전문기업
							<br />
							<span className="purple">단 2주면</span> 충분합니다.
						</p>
						<div className="right__line"></div>
					</div>
				</div>
				<button className="purple__btn inquire__move--btn">마케팅 문의</button>
			</div>
		</Container>
		// </section>
	);
};

export default Introduce;
