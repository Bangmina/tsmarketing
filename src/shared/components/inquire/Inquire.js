import React from "react";
import { Link } from "react-router-dom";
import { ArticleTitle, Container } from "../../components";
import "./inquire.scss";

const Inquire = () => {
	const ArticleTitleProps = [
		// 타이틀 컴포넌트 class
		"inquire__title white",
		// 타이틀
		"마케팅 문의하기",
		// 서브타이틀
		"간단한 문의라도 정확하게 답변드리기 위해\n 하단의내용을 기입해주시면 신속하고 자세한 내용 전달 드릴 수 있습니다",
	];
	(function () {
		// get all data in form and return object
		function getFormData(form) {
			var elements = form.elements;
			var honeypot;

			var fields = Object.keys(elements)
				.filter(function (k) {
					if (elements[k].name === "honeypot") {
						honeypot = elements[k].value;
						return false;
					}
					return true;
				})
				.map(function (k) {
					if (elements[k].name !== undefined) {
						return elements[k].name;
						// special case for Edge's html collection
					} else if (elements[k].length > 0) {
						return elements[k].item(0).name;
					}
				})
				.filter(function (item, pos, self) {
					return self.indexOf(item) == pos && item;
				});

			var formData = {};
			fields.forEach(function (name) {
				var element = elements[name];

				// singular form elements just have one value
				formData[name] = element.value;

				// when our element has multiple items, get their values
				if (element.length) {
					var data = [];
					for (var i = 0; i < element.length; i++) {
						var item = element.item(i);
						if (item.checked || item.selected) {
							data.push(item.value);
						}
					}
					formData[name] = data.join(", ");
				}
			});

			// add form-specific values into the data
			formData.formDataNameOrder = JSON.stringify(fields);
			formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
			formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

			return { data: formData, honeypot: honeypot };
		}

		function handleFormSubmit(event) {
			// handles form submit without any jquery
			event.preventDefault(); // we are submitting via xhr below
			var form = event.target;
			var formData = getFormData(form);
			var data = formData.data;

			if (form.inquireAgreement.checked == false) {
				alert("개인정보수집 및 이용동의를 체크해주세요.");
				return;
			}

			// If a honeypot field is filled, assume it was done so by a spam bot.
			if (formData.honeypot) {
				return false;
			}

			disableAllButtons(form);
			var url = form.action;
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url);
			// xhr.withCredentials = true;
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					form.reset();
					//var formElements = form.querySelector(".form-elements")
					//if (formElements) {
					//  formElements.style.display = "none"; // hide form
					//}
					//var thankYouMessage = form.querySelector(".thankyou_message");
					//if (thankYouMessage) {
					//  thankYouMessage.style.display = "block";
					//}
					alert("문의하였습니다.");
					window.location.reload();
				}
			};
			// url encode form data for sending as post data
			var encoded = Object.keys(data)
				.map(function (k) {
					return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
				})
				.join("&");
			xhr.send(encoded);
		}

		function loaded() {
			// bind to the submit event of our form
			var forms = document.querySelectorAll("form.gform");
			for (var i = 0; i < forms.length; i++) {
				forms[i].addEventListener("submit", handleFormSubmit, false);
			}
		}
		document.addEventListener("DOMContentLoaded", loaded, false);

		function disableAllButtons(form) {
			var buttons = form.querySelectorAll("button");
			for (var i = 0; i < buttons.length; i++) {
				buttons[i].disabled = true;
			}
		}
	})();
	return (
		<article className="inquire">
			<ArticleTitle
				titClass={ArticleTitleProps[0]}
				title={ArticleTitleProps[1]}
				subtitle={ArticleTitleProps[2]}
			/>
			<form
				method="POST"
				action="https://script.google.com/macros/s/AKfycbwgDeDtp3sznyGxpZ2SLkU4t0fY02owvjXNclpi/exec"
				className="gform inquire__form">
				<ul className="inquire__list">
					<li>
						<label for="inquireCompany">업체명</label>
						<input id="inquireCompany" name="Company" type="text" required />
					</li>
					<li>
						<label for="inquireName">성함</label>
						<input id="inquireName" name="Name" type="text" required />
					</li>
				</ul>
				<ul className="inquire__list2">
					<li>
						<label for="inquireTel">연락처</label>
						<input id="inquireTel" name="Tel" type="text" required />
					</li>
					<li>
						<label for="inquireUrl"> 스토어명/URL</label>
						<input id="inquireUrl" name="Url" type="text" required />
					</li>
				</ul>
				<div className="inquire__content">
					<label for="inquireContent">내용</label>
					<textarea id="inquireContent" name="Content" required></textarea>
				</div>
				<div className="inquire__agreement--box">
					<input id="inquireAgreement" name="Agreement" type="checkbox" />
					<label for="inquireAgreement">개인정보수집 및 이용동의</label>
				</div>
				<div>
					<input
						id="honeypot"
						type="text"
						name="honeypot"
						value=""
						style={{ display: "none" }}
					/>
				</div>
				<button className="inquire__btn">문의하기</button>
			</form>
		</article>
	);
};

export default Inquire;
