import React from 'react';

const inputStyling = {
	opacity: '0',
	position: 'fixed',
	width: '0',
};
const labelStyling = {
	display: 'inline-block',
	backgroundColor: 'DodgerBlue',
	color: 'wheat',
	padding: '0.5rem',
	cursor: 'pointer',
	border: '1px solid black',
	width: '120px',
	margin: '8px',
};
/* 
  Här har jag lagt in lite css för att visa hur det ser ut när vi får radio buttons att se ut som
  vanliga knappar. Det är inte meningen att dom ska se ut så här i den färdiga appen. Det är inte
  heller meningen att vi ska ha styling här, det lägger vi i en css-fil såklart
*/

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
					style={inputStyling}
					onChange={buttonChangeHandler}
				/>
			) : (
				<input
					type='radio'
					id={category}
					value={category}
					name='searchButton'
					style={inputStyling}
					onChange={buttonChangeHandler}
				/>
			)}

			<label htmlFor={category} style={labelStyling}>
				{category}
			</label>
		</div>
	);
}

export default SearchButton;
