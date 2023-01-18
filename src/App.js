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
	const [selectedItem, setSelectedItem] = useState(null);

	/* 
	useEffect(() => {
		console.log(countriesFilter);
	}, [countriesFilter]);

	useEffect(() => {
		console.log(categoriesFilter);
	}, [categoriesFilter]);
	
  useEffect(()=>{
    console.log(selectedItem);
  }, [selectedItem]);
  */

	return (
		<>
			<div className='App'>
				<Header />
				<div className='search-container'>
					<Search
						setCategoriesFilter={setCategoriesFilter}
						setCountriesFilter={setCountriesFilter}
						searchCategories={searchCategories}
					/>
					{selectedItem && (
						<InfoBox setSelectedItem={setSelectedItem} {...selectedItem} />
					)}
				</div>
				<CountryList
					categoriesFilter={categoriesFilter}
					countriesFilter={countriesFilter}
					setSelectedItem={setSelectedItem}
				/>
			</div>
		</>
	);
}

export default App;
