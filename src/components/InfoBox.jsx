import React from 'react';

// Sök -> filter -> resultat 
// Resultatet visas i Infobox
function InfoBox(selectedItem)  {
	
	console.log(selectedItem);

	return (
	<div>

		<h2>{selectedItem.name}</h2>
		<table>
			{
				<>
				<tr><td>{selectedItem.capital}</td></tr>
				<tr><td>{selectedItem.population}</td></tr>
				<tr><td>{selectedItem.area}</td></tr>
				<tr><td>{selectedItem.flag.small}</td></tr>
				</>
			}
		</table>

	</div>);
};

export default InfoBox;
