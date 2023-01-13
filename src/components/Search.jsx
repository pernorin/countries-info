import React, { useEffect, useState } from 'react';
import SearchButton from './SearchButton';

function Search({ setCountriesFilter, setCategoriesFilter, searchCategories }) {
	const searchChangeHandler = (event) => {
		setCountriesFilter(event.target.value);
	};

	return (
		<div>
			<input type='text' onChange={searchChangeHandler} />
			<span>Search Country by:</span>
			{searchCategories.map((searchCategory, i) => {
				return (
					<SearchButton
						key={i}
						category={searchCategory}
						index={i}
						setCategoriesFilter={setCategoriesFilter}
					/>
				);
			})}
		</div>
	);
}

export default Search;
