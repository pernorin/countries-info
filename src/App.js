import './App.css';
import { useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import Header from './components/Header';
import Search from './components/Search';
import InfoBox from './components/InfoBox';

const searchCategories = ['name', 'language', 'currency'];

function App() {
	const [countriesFilter, setCountriesFilter] = useState('');
	const [categoriesFilter, setCategoriesFilter] = useState(searchCategories[0]);

	/* 
	useEffect(() => {
		console.log(countriesFilter);
	}, [countriesFilter]);

	useEffect(() => {
		console.log(categoriesFilter);
	}, [categoriesFilter]);
	*/

	return (
		<div className='App'>
			<Header />
			<Search
				setCategoriesFilter={setCategoriesFilter}
				setCountriesFilter={setCountriesFilter}
				searchCategories={searchCategories}
			/>
			<CountryList />
			<InfoBox/>
		</div>
	);
}

export default App;
