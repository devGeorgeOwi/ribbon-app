import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Activity from "./Activity";
import Earn from "./Earn";
import Home from "./Home";
import Market from "./Market";
import "./Nav.css";
import Wallet from "./Wallet";
import home from "../images/home.png";
import activity from "../images/activity.png";
import wallet from "../images/wallet.png";
import market from "../images/icons8-shop-50.png";
import earn from "../images/";

function Nav() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="nav">
			<ul className="nav__menu">
				<li>
					<img src={home} alt="" />
					Home
				</li>
				<li>
					<img src={activity} alt="" />
					Activity
				</li>
				<li>
					<img src={wallet} alt="" />
					Wallet
				</li>
				<li>
					M
					<img src={market} alt="" />
					Market
				</li>
				<li>
					<img src={earn} alt="" />
					Earn
				</li>
			</ul>
			{/* Home */}
			<Home />
			{/* Activity */}
			<Activity />
			{/* wallet */}
			<Wallet />
			{/* Market */}
			<Market />
			{/* Earn */}
			<Earn />
		</div>
	);
}

export default Nav;
