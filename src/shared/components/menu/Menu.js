import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import $ from "jquery";

const Menu = () => {
	$(function () {
		// 메뉴 버튼
		$(".menu__menu--btn").on("click", function () {
			$(this).toggleClass("active");
			$(this).siblings("ul").stop().fadeToggle();
			if ($(this).hasClass("active")) {
			} else {
				$("body,html").css("overflow-y", "auto");
			}
		});
		// 메뉴 active
		$(".menu__nav--depth1 li a").on("click", function (e) {
			$(".menu__nav--depth1 li a").removeClass("active");
			$(this).addClass("active");
			$(".menu__nav--depth1").hide();
			$(".menu__menu--btn").removeClass("active");
		});
		$(".menu__nav--depth2 li a").on("click", function () {
			$(this).closest(".menu__nav--marketing").find("> a").addClass("active");
		});
	});

	return (
		<div className="menu">
			<div className="menu__box">
				<h1 className="menu__logo1">
					<Link to="/">
						<img
							className="menu__logo1--img"
							src="/images/logo_header1.png"
							alt="로고"
						/>
					</Link>
				</h1>
				<h2 className="menu__logo2">
					<Link to="/">
						<img
							className="menu__logo2--img"
							src="/images/logo_header2.png"
							alt="로고"
						/>
					</Link>
				</h2>
				<nav className="menu__nav">
					<button className="menu__menu--btn">
						<span></span>
					</button>
					<ul className="menu__nav--depth1">
						<li>
							<Link to="/" className="active">
								회사소개
							</Link>
						</li>
						<li className="menu__nav--marketing">
							<Link to="/smartStore">마케팅상품소개</Link>
							<ul className="menu__nav--depth2">
								<li>
									<Link to="/smartStore" className="active">
										스마트스토어 마케팅
									</Link>
								</li>
								<li>
									<Link to="/experience">체험단 마케팅</Link>
								</li>
								<li>
									<Link to="/search">검색광고 마케팅</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/marketingInquire">마케팅문의</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Menu;
