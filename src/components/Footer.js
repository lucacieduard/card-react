import React from "react";
import facebook_logo from "./FacebookIcon.png";
import twitter_logo from "./TwitterIcon.png";
import instagram_logo from "./InstagramIcon.png";
import github_logo from "./GitHubIcon.png";

export default function Footer() {
	return (
		<footer>
			<img src={twitter_logo} alt="" />
			<img src={facebook_logo} alt="" />
			<img src={instagram_logo} alt="" />
			<img src={github_logo} alt="" />
		</footer>
	);
}
