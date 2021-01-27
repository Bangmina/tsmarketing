import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import $ from "jquery";

const Header = () => {
	$(function () {
		// 마케팅 상품소개 depth
		const $navItem = $(".header__nav--depth1 li");
		const $navDepth = $(".header__nav--depth2");
		$navItem.on({
			"mouseenter focusin": function () {
				$(this).find($navDepth).addClass("active");
				$(this).addClass("active").find($navDepth).stop().fadeIn(100);
			},
			"mouseleave focusout": function () {
				$navDepth.removeClass("active");
				$(this).removeClass("active").find($navDepth).stop().fadeOut(100);
			},
		});

		// depth1 active
		const $headerDepth1 = $(".header__nav--depth1 > li > a");
		const $headerDepth2 = $(".header__nav--depth2 > li > a");
		$headerDepth1.on("click", function (e) {
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).addClass("active");
			$(this)
				.parent()
				.find("li")
				.children()
				.removeClass("active")
				.eq(0)
				.addClass("active");
		});
		$headerDepth2.on("click", function (e) {
			$(this)
				.parents(".header__nav--marketing")
				.siblings()
				.children("a")
				.removeClass("active");
			$(this)
				.parents(".header__nav--marketing")
				.children("a")
				.addClass("active");
			$(this)
				.addClass("active")
				.closest("li")
				.siblings("li")
				.children("a")
				.removeClass("active");
		});
	});

	return (
		<header className="header ">
			<div className="header__box">
				<h1 className="header__logo1">
					<Link to="/">
						<img
							className="header__logo1--img"
							src="/images/logo_header1.png"
							alt="로고"
						/>
					</Link>
				</h1>
				<h2 className="header__logo2">
					<Link to="/">
						<img
							className="header__logo2--img"
							src="/images/logo_header2.png"
							alt="로고"
						/>
					</Link>
				</h2>
				<nav className="header__nav">
					<button className="header__menu--btn">
						<span></span>
					</button>
					<ul className="header__nav--depth1">
						<li>
							<Link to="/" className="active">
								회사소개
							</Link>
						</li>
						<li className="header__nav--marketing">
							<Link to="/smartStore">마케팅상품소개</Link>
							<ul className="header__nav--depth2">
								<li>
									<Link to="/smartStore">스마트스토어 마케팅</Link>
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
		</header>
	);
};

export default Header;
