import React, { useState } from "react";
import { ReactComponent as HammerIcon } from "../../assets/icons/hammer.svg";

const ProjectsApp = ({ open }) => {
	let [x, setX] = useState(10);
	let [y, setY] = useState(10);
	let [grabOffset, setGrabOffset] = useState([0, 0]);

	const move = (dx, dy) => {
		setX(x + dx);
		setY(y + dy);
	};

	if (open) {
		return (
			<section id="projects-window" className="windows">
				<div className="window-container" style={{ left: x, top: y }}>
					<div
						className="window-titlebar"
						draggable="true"
						onDragStart={(e) => {
							e.dataTransfer.setDragImage(new Image(), 0, 0);
							setGrabOffset([e.clientX - x, e.clientY - y]);
						}}
						onDrag={(e) => {
							if (e.clientX) setX(e.clientX - grabOffset[0]);
							if (e.clientY) setY(e.clientY - grabOffset[1]);
						}}
					>
						<div className="window-title">
							<HammerIcon />
							<p>My Projects</p>
						</div>

						<div className="window-controls"></div>
					</div>
				</div>
			</section>
		);
	} else {
		return <></>;
	}
};

export default ProjectsApp;
