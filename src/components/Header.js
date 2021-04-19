import React from "react";
import "./Header.css";
import logo from "../images/ribbon.png";
import avatar from "../images/userprofile.png";
import bellIcon from "../images/notification.png";

function Header() {
	return (
		<div className="header">
			<img src={logo} className="header__logo" alt="ribbon logo" />

			<div className="header__content">
				<img src={avatar} className="header__avatar" alt="user avatar" />
				<img src={bellIcon} className="header__notification" alt="" />
			</div>
		</div>
	);
}

export default Header;
