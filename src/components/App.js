import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
  const [filterGreased, setFilterGreased] = useState(false)
  const [sortBy, setSortBy] = useState("none")

  let displayedHogs = filterGreased ? hogs.filter((hog) => hog.greased) : hogs;

  if (sortBy === "name") {
    displayedHogs = [...displayedHogs].sort((a, b) => a.name > b.name ? 1 : -1)
  } else if (sortBy === "weight") {
    displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight);
  }

	return (
		<div className="App">
			<Nav />
      <Filter
        filteredGreased={filterGreased}
        onFilterChange={setFilterGreased}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
			<HogList hogs={displayedHogs} />
		</div>
	);
}

export default App;

/*

BONUS: Allow users to hide hogs (not delete them, just hide them from view!)

BONUS: Add a form to allow users to add new hogs to the page

*/
