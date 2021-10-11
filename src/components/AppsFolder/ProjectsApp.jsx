import React from "react";
import AppTitleBar from "./AppTitleBar";
import { ReactComponent as HammerIcon } from "../../assets/icons/hammer.svg";

const ProjectsApp = ({ openClose, prop, setAppProps }) => {
	// let [x, setX] = useState(10);
	// let [y, setY] = useState(10);
	// let [grabOffset, setGrabOffset] = useState([0, 0]);
	// const id = 0;

	// if (open) {
	return (
		<section id="projects-window" className="windows">
			<div
				className={
					prop.isOpen ? "window-container" : "window-container window-container-closed"
				}
				style={{ left: prop.x, top: prop.y }}
			>
				<AppTitleBar
					prop = {prop}
					openClose = {openClose}
					setAppProps = {setAppProps}
				/>

				<div className="window-content">
					Lorem, ipsum. Lorem ipsum dolor sit, amet consectetur, adipisicing
					elit. Unde, eum.
				</div>
			</div>
		</section>
	);
	// } else {
	// 	return <></>;
	// }
};

export default ProjectsApp;
