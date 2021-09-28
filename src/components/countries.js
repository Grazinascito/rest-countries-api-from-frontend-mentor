import React from 'react';
import {useState, useEffect} from 'react';

const url = 'https://restcountries.com/v3/all';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const countries = await response.json();
            setCountries(countries);
        }
        fetchData();
    }, []);
    

    return(
        <>
        <section className="grid">
            {countries.map((country) => {
                const {cca2, name, region, capital, flags} = country;
              

                return (
                    <article key={cca2}>
                        <div>
                            <img src={flags[0]} alt={name.common} />
                            <h3>{name.common}</h3>
                            <h4>official name: <span>{name.official}</span></h4>
                            <h4>region: <span>{region}</span></h4>
                            <h4>capital: <span>{capital}</span></h4>                         
                        </div>
                    </article>
                );
            })} 
        </section>
       </>
    );
};

export default Countries;