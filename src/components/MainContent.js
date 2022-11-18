import React from "react";
import email from "./Icon.png";
import linkedin from "./linkedin.png";

export default function MainContent() {
	return (
		<div className="container">
			<h1 className="name">Laura Smith</h1>
			<p className="ocupation">Frontend Developer</p>
			<p className="website">laurasmith.website</p>
			<div className="buttons">
				<button className="button email-button">
					<img src={email} alt="email-logo" />
					Email
				</button>
				<button className="button linkedln-button">
					<img src={linkedin} alt="email-logo" />
					Linkedln
				</button>
			</div>
			<div className="info">
				<h2 className="info-title">About</h2>
				<p>
					I am a frontend developer with a particular interest in making things
					simple and automating daily tasks. I try to keep up with security and
					best practices, and am always looking for new things to learn.
				</p>
				<h2 className="info-title">Interests</h2>
				<p>
					Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
					Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
				</p>
			</div>
		</div>
	);
}
