import React from "react";
import "./RecentActivity.css";
import hivTest from "../images/hiv.png";
import bloodPressure from "../images/bloodpressure.png";
import radioGraphy from "../images/Radiography-512.png";

function RecentActivity() {
	return (
		<div className="activity">
			<div className="activity__heading">
				<p>Recent Activity</p>
			</div>
			<div className="activity__recent">
				<img src={hivTest} className="recent__hivtest" alt="" />
				<p>HIV Blood Draw Test</p>
				<p>A100</p>
			</div>
			<div className="activity__recent">
				<img src={radioGraphy} className="recent__radiography" alt="" />
				<p>HIV Blood Draw Test</p>
				<p>A100</p>
			</div>
			<div className="activity__recent">
				<img src={bloodPressure} className="recent__bloodpressure" alt="" />
				<p>HIV Blood Draw Test</p>
				<p>A100</p>
			</div>
		</div>
	);
}

export default RecentActivity;
