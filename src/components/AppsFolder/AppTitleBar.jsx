import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const AppTitleBar = ({
	id,
	windowX,
	windowY,
	windowSetX,
	windowSetY,
	grabOffset,
	setGrabOffset,
	openClose,
	title,
	IconComponent,
}) => {
	return (
		<div
			className="window-titlebar"
			draggable="true"
			onDragStart={(e) => {
				e.dataTransfer.setDragImage(new Image(), 0, 0);
				setGrabOffset([e.clientX - windowX, e.clientY - windowY]);
			}}
			onDrag={(e) => {
				if (e.clientX) windowSetX(e.clientX - grabOffset[0]);
				if (e.clientY) windowSetY(e.clientY - grabOffset[1]);
			}}
		>
			<div className="window-title">
				<IconComponent />
				<p>{title}</p>
			</div>
			<div className="window-controls">
				<CloseIcon className="close-icon"
					onClick={() => {
						openClose(id, false);
					}}
				/>
			</div>
		</div>
	);
};

export default AppTitleBar;
