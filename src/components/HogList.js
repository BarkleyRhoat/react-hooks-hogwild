import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
	return hogs.map((hog) => <HogCard key={hog.name} hog={hog} />);
}

export default HogList;
