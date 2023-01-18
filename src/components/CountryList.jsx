import React, { useState, useEffect, useRef } from 'react';

const apiKey = 'mSmVIwoIy81W4T8fj3bY50K7gKlfLc9p4xnVmN0v';

const CountryList = ({
	countriesFilter,
	categoriesFilter,
	setSelectedItem,
}) => {
	const [allCountries, setAllCountries] = useState(null);
	const [filteredList, setFilteredList] = useState([]);
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
			setAllCountries(Object.values(countries));
			setFilteredList(Object.values(countries));
		})();

		executedRef.current = true;
	}, []);

	useEffect(() => {
		if (allCountries !== null) {
			switch (categoriesFilter) {
				case 'name':
					setFilteredList(
						allCountries.filter((country) => {
							return country.name
								.toLowerCase()
								.includes(countriesFilter.toLowerCase());
						})
					);
					break;
				case 'language':
					setFilteredList(
						allCountries.filter((country) => {
							return Object.values(country.languages).find((lang) => {
								return lang.toLowerCase().includes(countriesFilter.toLowerCase());
							});
						})
					);
					break;
				case 'currency':
					setFilteredList(
						allCountries.filter((country) => {
							return Object.values(country.currencies)
								.map((c) => {
									return c.name;
								})
								.find((curr) => {
									return curr.toLowerCase().includes(countriesFilter.toLowerCase());
								});
						})
					);
					break;

				default:
					break;
			}
		}
	}, [countriesFilter, categoriesFilter]);

	return (
		<div className='countryList'>
			<h2>country list</h2>

			<ul>
				{allCountries
					? filteredList.map((country) => {
							return (
								<li key={country.alpha2Code} onClick={() => setSelectedItem(country)}>
									{country.name} -{' '}
									<img src={country.flag.small} alt={`flag of ${country.name}`} />
								</li>
							);
					  })
					: ''}
			</ul>
		</div>
	);
};
export default CountryList;
