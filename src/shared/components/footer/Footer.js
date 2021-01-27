import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
	return (
		<footer class="footer">
			<div class="footer__web">
				<ul class="footer__list">
					<li>
						<img src="./images/icon_footer1.png" alt="" class="footer__icon" />
						<div class="footer__box">
							<p class="footer__title">PHONE</p>
							<p class="footer__content--tel">010.4303.5744</p>
						</div>
					</li>
					<li>
						<img src="./images/icon_footer2.png" alt="" class="footer__icon" />
						<div class="footer__box">
							<p class="footer__title">Email</p>
							<p class="footer__content--mail">info@tsnmarketing.com</p>
						</div>
					</li>
					<li>
						<img src="./images/icon_footer3.png" alt="" class="footer__icon" />
						<div class="footer__box">
							<p class="footer__title">Adress</p>
							<p class="footer__content--addr">
								경기도 부천시 소향로 131 <br />
								일신빌딩 7층 TS Marketing
							</p>
						</div>
					</li>
				</ul>
			</div>
			<footer class="footer__mobile">
				<ul class="footer__list">
					<li>티에스마케팅</li>
					<li>경기도 부천시 소향로 131 일신빌딩 7층 TS Marketing</li>
					<li>010.4303.5744</li>
					<li>info@tsnmarketing.com</li>
				</ul>
			</footer>
		</footer>
	);
};

export default Footer;
