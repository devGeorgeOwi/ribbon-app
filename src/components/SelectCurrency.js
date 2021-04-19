import React from "react";
import "./SelectCurrency.css";

function SelectCurrency() {
	return (
		<div className="currency">
			<div className="currency__heading">
				<p>Select Currency</p>
			</div>
			<div className="currency__select">
				<form>
					<label htmlFor="number">
						<select>
							<option value="AFYA">AFYA</option>
							<option value="AZAR">AZAR</option>
						</select>
					</label>
					<input type="number" placeholder="0.000001" />
				</form>
			</div>
			<div className="currency__buttons">
				<button className="currency__button">SEND</button>
				<button className="currency__button">RECEIVE</button>
			</div>
		</div>
	);
}

export default SelectCurrency;
