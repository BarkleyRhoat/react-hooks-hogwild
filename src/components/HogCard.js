import React, { useState } from "react";

function HogCard({ hog }) {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div onClick={() => setShowDetails(!showDetails)}>
			<h2>{hog.name}</h2>
			<img src={hog.image} alt={hog.name} />
			{showDetails && (
				<div>
					<p>specialty: {hog.specialty}</p>
					<p>weight: {hog.weight}</p>
					<p>greased: {hog.greased ? "yes" : "no"}</p>
					<p>highest medal: {hog["highest medal achieved"]}</p>
				</div>
			)}
		</div>
	);
}

export default HogCard;
