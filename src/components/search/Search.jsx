import React from 'react';
import './search.css'

const Search = ({ value, getSearch, getSearchBy, searchBy }) => {
    return (
        <div className="search-bar">
            <input value={value} onChange={getSearch} className="search" placeholder="Search..." />
            <select className="select" onChange={getSearchBy} value={searchBy}>
                { !searchBy.length && <option value="">Select</option>}
                <option value="first_name">firstName</option>
                <option value="last_name">lastName</option>
                <option value="email">Email</option>
                <option value="city">City</option>
                <option value="state">State</option>
            </select>
        </div>
    )
}

export default Search