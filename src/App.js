import React, { useState } from "react";
import Panel from "./components/Panel";
import * as apps from "./components/Apps";
import DesktopItems from "./components/DesktopItems";

// Icons
import { ReactComponent as HammerIcon } from "./assets/icons/hammer.svg";
import { ReactComponent as InfoIcon } from "./assets/icons/info.svg";
import { ReactComponent as PencilIcon } from "./assets/icons/pencil.svg";
import { ReactComponent as TerminalIcon } from "./assets/icons/terminal.svg";

// Apps
import ProjectsApp from "./components/AppsFolder/ProjectsApp";
import InfoApp from "./components/AppsFolder/InfoApp";

function App() {
	let [appStates, setAppStates] = useState(
		apps.appsList.map((app) => {
			return app.isOpen;
		})
	);

	let [appProps, setAppProps] = useState([
		{
			id: 0,
			label: "Projects",
			icon: HammerIcon,
			isOpen: false,
			x: 10,
			y: 10,
			grabOffset: [0, 0],
			focused: false,
		},
		{
			id: 1,
			label: "Info",
			icon: InfoIcon,
			isOpen: false,
			x: 10,
			y: 10,
			grabOffset: [0, 0],
			focused: false,
		},
		{
			id: 2,
			label: "Blogs",
			icon: PencilIcon,
			isOpen: false,
			x: 10,
			y: 10,
			grabOffset: [0, 0],
			focused: false,
		},
		{
			id: 3,
			label: "MADTerm",
			icon: TerminalIcon,
			isOpen: false,
			x: 10,
			y: 10,
			grabOffset: [0, 0],
			focused: false,
		},
	]);

	const openOrCloseApp = (index, open) => {
		let newArr = [...appProps];
		newArr[index].isOpen = open;
		setAppProps(newArr);
	};

	const setProp = (index, prop, value) => {
		let newArr = [...appProps];
		newArr[index][prop] = value;
		setAppProps(newArr);
	};

	return (
		<div className="App desktop">
			<Panel openClose={openOrCloseApp} appProps={appProps} />
			<DesktopItems openClose={openOrCloseApp} appProps={appProps} />
			<ProjectsApp openClose={openOrCloseApp} prop={appProps[0]} setAppProps={setProp} />
			<InfoApp openClose={openOrCloseApp} prop={appProps[1]} setAppProps={setProp} />
		</div>
	);
}

export default App;
