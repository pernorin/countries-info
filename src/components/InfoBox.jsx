import React from 'react';

// Sök -> filter -> resultat 
// Resultatet visas i Infobox
function InfoBox(selectedItem)  {
	
	console.log(selectedItem);

	return (
	<div className='infoBox'>

		<h2 className='infoBox'>{selectedItem.name}</h2>
		
		<table>
			{
				<>
				
				<tr><th>Capital</th> <td>{selectedItem.capital}</td></tr>
				<tr><th>Population</th> <td>{selectedItem.population.toLocaleString()}</td></tr>
				<tr><th>Area</th> <td>{selectedItem.area.toLocaleString()}km&sup2;</td></tr>
				<tr><th>Flag</th> <td><img src={selectedItem.flag.small} alt={`flag of ${selectedItem.name}`} /> </td></tr>
				</>
			}
		</table>

	</div>);
};

export default InfoBox;
