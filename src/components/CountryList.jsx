import React,{useState,useEffect} from 'react';

import InfoBox from './InfoBox';
import SearchButton from './SearchButton';
import Search from './Search';

import { Link } from "react-router-dom";


import data from './countryapi-ALL.json';

import React from 'react';
import InfoBox from './InfoBox';


//Den första sidan när vi öppnar appen. List av land.
function CountryList() {
	return (
		<div>
			CountryList
			{/** Här skaffar vi listan */}

			<InfoBox/>
		</div>
	);
}

export default CountryList;

export const countryList = () =>{
return(
  <>
  <div>
    <div>Name : {data.countryName}</div>
    <div>Language : {data.languages}</div>
    <div>Currency: {data.currencies}</div>
    <div><label>Country :</label>
    <select>
      {data.country.map((country) => {
        return <option key={country.id} value={country.id}>{country.name}</option>
      })}
    </select>
    </div>
  </div>
  </>
)
}

const countryList = async () => {
	try {
	  const res = await fetch(`./countryapi-ALL.json`);

	  if (!res.ok) throw new Error("Something went wrong!");

	  const data = await res.json();

	  console.log(data);

	  setCountries(data);

	  setIsLoading(false);
	} catch (error) {
	  setIsLoading(false);
	  setError(error.message);
	}
  };

  const getCountryByName = async (countryName) => {
	try {
	  const res = await fetch(`./countryapi-ALL.json${countryName}`);

	  if (!res.ok) throw new Error("Not found any country!");

	  const data = await res.json();
	  setCountries(data);

	  setIsLoading(false);
	} catch (error) {
	  setIsLoading(false);
	  setError(error.message);
	}
  };

  const getCountryByLanguages = async (languages) => {
	try {
	  const res = await fetch(`./countryapi-ALL.json${countryLanguages}`);

	  if (!res.ok) throw new Error("Failed..........");

	  const data = await res.json();
	  setCountries(data);

	  setIsLoading(false);
	} catch (error) {
	  setIsLoading(false);
	  setError(false);
	}
  };

  useEffect(() => {
	getAllCountries();
  }, []);

  const getCountryByCurrencies = async (currencies) => {
	try {
	  const res = await fetch(`./countryapi-ALL.json${countryCurrencies}`);

	  if (!res.ok) throw new Error("Failed..........");

	  const data = await res.json();
	  setCountries(data);

	  setIsLoading(false);
	} catch (error) {
	  setIsLoading(false);
	  setError(false);
	}
  };

  useEffect(() => {
	getAllCountries();
  }, []);

  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchButton onSearch={getCountryByName} />
        </div>

        <div className="filter">
          <SearchButton onSelect={getCountryByLanguages} />
        </div>
      </div>

      <div className="country__bottom">
        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="country__name">
              <div className="country__names">
              </div>

              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>
                  {" "}
                  Currency:{" "}
                  {format(country.currencies)}
                </h6>
                <h6> Language: {country.languages}</h6>
                <h6> Currency: {country.currencies}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

export default countryList;


