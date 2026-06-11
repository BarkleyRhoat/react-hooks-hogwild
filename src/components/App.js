import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Filter />
			<HogList />
		</div>
	);
}

export default App;
