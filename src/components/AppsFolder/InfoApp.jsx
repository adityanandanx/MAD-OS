import React from "react";
import AppTitleBar from "./AppTitleBar";

const InfoApp = ({ openClose, prop, setAppProps }) => {
	return (
		<div
			className={
				prop.isOpen
					? "window-container"
					: "window-container window-container-closed"
			}
			style={{ left: prop.x, top: prop.y }}
			tabindex="1"
		>
			<AppTitleBar
				prop={prop}
				openClose={openClose}
				setAppProps={setAppProps}
			/>

			<div className="window-content">
				<h1>Info</h1>
				<p>I will put my Info here :D</p>
				<p>(Still need to customize scrollbar :P)</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem itaque omnis inventore consequuntur ipsam possimus, labore beatae maxime, odio perspiciatis dolorum explicabo quos veniam quam iusto quae unde aut, alias. Itaque, officiis, quod? Laboriosam, porro repellat enim delectus voluptatum dolores voluptates repudiandae nam consequatur rerum voluptatem ab voluptatibus molestiae commodi iure pariatur! Ea, ratione quia qui, rerum saepe temporibus dicta at maiores ipsam voluptatum similique doloribus tempora nobis cupiditate ex iusto, perspiciatis, nam aspernatur hic obcaecati! Ratione laborum qui voluptatem modi consequatur inventore? Laborum, animi excepturi consequuntur beatae nemo asperiores expedita explicabo maiores culpa ipsam non nisi velit molestias consequatur fugiat pariatur ea enim voluptas, fuga modi suscipit nostrum? Autem vel, explicabo, dolorem perferendis voluptatem sed repudiandae ducimus, corrupti rem minima laborum nam natus. Hic ab necessitatibus omnis odit iure nostrum eligendi. Eos explicabo voluptate inventore nemo suscipit, eveniet praesentium dolorum, eaque voluptates reprehenderit impedit odio, rerum, quod commodi dolor dolores. Eius deserunt, veniam totam nulla perferendis omnis? Quam blanditiis voluptas, quisquam fugiat dolor libero itaque et aperiam nostrum recusandae quaerat dolorem corporis sit vitae. Eaque nesciunt quae aspernatur harum est beatae laboriosam voluptatibus. Tempore, tempora repellendus impedit eius placeat quidem obcaecati alias sit. Natus vero, eveniet laudantium distinctio.</p>
			</div>
		</div>
	);
};

export default InfoApp;
