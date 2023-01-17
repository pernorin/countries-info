import React from 'react';

// Sök -> filter -> resultat 
// Resultatet visas i Infobox
function InfoBox({allCountries, country})  {
	return (
	<div>
		
		<h2>{country.name}</h2>
		<table>
			{
				<>
				<tr><td>{country.capital}</td></tr>
				<tr><td>{country.population}</td></tr>
				<tr><td>{country.area}</td></tr>
				<tr><td>{country.flag.small}</td></tr>
				</>
			}
		</table>

	</div>);
};

export default InfoBox;
