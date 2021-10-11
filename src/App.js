import React from 'react';
import Countries from './components/countries';
import Header from './components/header';
import Filter from './components/filter';
import {useState, useEffect} from 'react';

const url = 'https://restcountries.com/v3/all';

function App() {

    const [filterCountry, setFilterCountry] = useState([]);
    const [countries, setCountries] = useState([]);
    const [select, setSelect] = useState('');
    const [filterSelect, setFilterSelect] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const countries = await response.json();
            setCountries(countries);
            setFilterSelect(countries);
        }
        fetchData();
    }, []);

    const handleFilter = (event) => {
        if(event.key !== 'Enter'){
            setInput(event.target.value)
            return 
        }

        event.preventDefault();

       const filterCountry = filterSelect.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()));

       setFilterCountry(filterCountry);
    }

    const handleSelect = (event) => {

      setSelect(event.target.value);

      const filterSelect = countries.filter(select => select.region === event.target.value);

      setFilterSelect(filterSelect);

      if(event.target.value === ''){
        setFilterSelect(countries);
      }

    }

    useEffect(() => {

        if(countries){
            const filterCountry = filterSelect.filter(country => country.name.common.toLowerCase().includes(input.toLowerCase()));

            setFilterCountry(filterCountry);
        }
    }, [filterSelect]);

  return (
    <>
      <Header />
      <Filter
        handleFilter={handleFilter}
      />
    <section className="filter">
        <div className="region-filter">
            <select value={select} onChange={handleSelect}  name="select" id="select" className="select">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
      </div>
     </section>

      {
      filterCountry.length > 0 &&
      <section className="grid">
      {filterCountry.map((country) => {
          const {cca2, name, region, capital, flags} = country;
          return (
              <article key={cca2}>
                  <div>
                      <img src={flags[0]} alt={name.common} />
                      <div className="details">
                          <h3>{name.common}</h3>
                          <h4>official name: <span>{name.official}</span></h4>
                          <h4>region: <span>{region}</span></h4>
                          <h4>capital: <span>{capital}</span></h4> 
                      </div>                        
                  </div>
              </article>
          );
      })} 
  </section>
    }
    
      
    </>
  );
}

export default App;
