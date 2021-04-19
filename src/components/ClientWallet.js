import React from "react";
import "./ClientWallet.css";

function Balance() {
	return (
		<div className="client">
			<div className="client__wallet">
				<div className="client__wallet__balance">
					<span>
						<i>AFYA</i>
					</span>

					<h2>143.00</h2>
					<p>Balance</p>
				</div>
				<div className="divider"></div>
				<div className="client__wallet__equivalent">
					<span>
						<i>ZAR</i>
					</span>
					<h2>R21.00</h2>
					<p>Equivalent</p>
				</div>
			</div>
		</div>
	);
}

export default Balance;
