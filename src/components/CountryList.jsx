import React, { useState, useEffect, useRef } from 'react';

const apiKey = 'mSmVIwoIy81W4T8fj3bY50K7gKlfLc9p4xnVmN0v';

const CountryList = ({
	countriesFilter,
	categoriesFilter,
	setSelectedItem,
}) => {
	const [allCountries, setAllCountries] = useState(null);
	const executedRef = useRef(false);

	/* 
    sök:
    https://countryapi.io/api/${categoriesFilter}/${countriesFilter}?apikey=${apiKey}
  */

	function getCountries() {
		const c = fetch(`https://countryapi.io/api/all?apikey=${apiKey}`)
			.then((response) => response.json())
			.catch((error) => console.log('error: ', error));

		return c;
	}

	useEffect(() => {
		if (executedRef.current) {
			return;
		}
		console.log('Effect is running.');

		(async () => {
			const countries = await getCountries();
			// setAllCountries(countries);
			//setAllCountries(Object.entries(countries));
			setAllCountries(Object.values(countries));
		})();

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

		/*
		fetch(`https://countryapi.io/api/all?apikey=${apiKey}`)
			.then((response) => response.json())
			.then((result) => setAllCountries(result)) //setAllCountries(Object.values(result))
			.catch((error) => console.log('error: ', error));
*/
		executedRef.current = true;
	}, []);

	////////////////////////////////////////////////////////////////////
	// useEffect(() => {
	// 	console.log('Effect is running.');
	// 	fetch(
	// 		`https://countryapi.io/api/${categoriesFilter}/${countriesFilter}?apikey=${apiKey}`
	// 	)
	// 		.then((response) => response.text())
	// 		.then((result) => console.log(JSON.parse(result)))
	// 		.catch((error) => console.log('error', error));
	// }, [categoriesFilter, countriesFilter]);
	//////////////////////////////////////////////////////////////////7

	//const testClick = () => console.log(typeof allCountries);

	const testClick = () => {
		/* const countryArr = Object.values(allCountries).slice(0, 20);
		console.log(countryArr);
		return countryArr; */
		console.log(allCountries);
		// for (const [key, value] of Object.entries(allCountries)) {
		// 	console.log(`${key}: ${value.name}`);
		// }
	};

  // const onSelect = (event) => {
  //  console.log("selectedItem");
  //  console.log( event.target.value);
  //  setSelectedItem(event.target.value);
  // }

	return (
		<div>
			country list
			<button onClick={testClick}>click me</button>
			{allCountries ? (
				<img
					src={allCountries[0].flag.medium}
					alt={`flag of ${allCountries[0].name}`}
				/>
			) : (
				''
			)}
			<ul>
				{allCountries?.map((country) => {
					return (
						<li 
              onClick={()=>setSelectedItem(country)} 
              key={country.alpha2Code}>
							{country.name} -{' '}
							<img src={country.flag.small} alt={`flag of ${country.name}`} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default CountryList;
