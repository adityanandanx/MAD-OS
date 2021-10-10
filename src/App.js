import React, { useState } from "react";
import Panel from "./components/Panel";
import ProjectsApp from "./components/AppsFolder/ProjectsApp";
import * as apps from "./components/Apps";
import DesktopItems from "./components/DesktopItems";

function App() {
	let [appStates, setAppStates] = useState(
		apps.appsList.map((app) => {
			return app.isOpen;
		})
	);

	const openOrCloseApp = (index, open) => {
		let newArr = [...appStates];
		newArr[index] = open;
		setAppStates(newArr);
	};

	return (
		<div className="App desktop">
			<Panel openClose={openOrCloseApp} openList={appStates} />
			<DesktopItems openClose={openOrCloseApp} />
			<ProjectsApp openClose={openOrCloseApp} open={appStates[0]} />
		</div>
	);
}

export default App;
