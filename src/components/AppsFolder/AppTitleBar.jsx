import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const AppTitleBar = ({ prop, openClose, setAppProps }) => {

	let [dragging, setDragging] = useState(false);

	return (
		<div
			className="window-titlebar"
			
			draggable="true"
			onDragStart={(e) => {
				e.dataTransfer.setDragImage(new Image(), 0, 0);
				setAppProps(prop.id, "grabOffset", [e.clientX - prop.x, e.clientY - prop.y]);
			}}
			onDrag={(e) => {
				if (e.clientX) setAppProps(prop.id, "x", e.clientX - prop.grabOffset[0]);
				if (e.clientY) setAppProps(prop.id, "y", e.clientY - prop.grabOffset[1]);
			}}
		>
			<div className="window-title">
				<prop.icon />
				<p>{prop.label}</p>
			</div>
			<div className="window-controls">
				<CloseIcon
					className="close-icon"
					onClick={() => {
						openClose(prop.id, false);
					}}
				/>
			</div>
		</div>
	);
};

export default AppTitleBar;

// Potential solution for drag not working in firefox
// 			onMouseDown={(e) => {
// 				setDragging(true);
// 				setAppProps(prop.id, "grabOffset", [e.clientX - prop.x, e.clientY - prop.y]);
// 			}}
// 			onMouseLeave={() => {
// 				setDragging(false);
// 			}}
// 			onMouseUp={() => {
// 				setDragging(false);
// 			}}
// 			onMouseMove={(e) => {
// 				if (dragging) {
// 					if (e.clientX) setAppProps(prop.id, "x", e.clientX - prop.grabOffset[0]);
// 					if (e.clientY) setAppProps(prop.id, "y", e.clientY - prop.grabOffset[1]);
// 				}
// 			}}