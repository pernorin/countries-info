import React from 'react';

function SearchButton({ category, index, setCategoriesFilter }) {
	let checked = false;
	if (index === 0) {
		checked = true;
	}
	/* 
  Koden ovanför är till för att hitta den första knappen (alltså name) 
  och se till att den är vald från början.
  */
	//console.log(index, checked);

	const buttonChangeHandler = (event) => {
		setCategoriesFilter(event.target.value);
	};

	return (
		<div>
			{checked ? (
				<input
					type='radio'
					id={category}
					value={category}
					name='searchButton'
					defaultChecked
					onChange={buttonChangeHandler}
					className='search-button'
				/>
			) : (
				<input
					type='radio'
					id={category}
					value={category}
					name='searchButton'
					onChange={buttonChangeHandler}
					className='search-button'
				/>
			)}

			<label htmlFor={category} className='search-button-label'>
				{category}
			</label>
		</div>
	);
}

export default SearchButton;
