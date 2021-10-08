// import React, { useState } from "react";
import { ReactComponent as HammerIcon } from "../assets/icons/hammer.svg";
import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";
import { ReactComponent as PencilIcon } from "../assets/icons/pencil.svg";
import { ReactComponent as TerminalIcon } from "../assets/icons/terminal.svg";

export let appsList = [
	{
		id: 0,
		label: "Projects",
		icon: HammerIcon,
		isOpen: false,
	},
	{
		id: 1,
		label: "Info",
		icon: InfoIcon,
		isOpen: false,
	},
	{
		id: 2,
		label: "Blogs",
		icon: PencilIcon,
		isOpen: false,
	},
	{
		id: 3,
		label: "MADTerm",
		icon: TerminalIcon,
		isOpen: false,
	},
];

// export let [appsList, setAppsList] = useState()
