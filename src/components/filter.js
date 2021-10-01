import React from 'react';
import {useState, useEffect} from 'react';



const Filter = (props) => {
    

    return (
        <section className="filter">
            <form className="form-control">
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder="Search for a country"    
                    onKeyDown={props.handleFilter}              
                 />
            </form>

            {/* <div className="region-filter">
                <select name="select" id="select" className="select">
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>

                </select>
            </div> */}
        </section>
    )
}

export default Filter;