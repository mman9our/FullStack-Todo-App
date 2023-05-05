import React, { useState } from 'react';
import './taskstable.css';

function SearchTodos({ onSearch }) {

    // Set up state to manage the search input value
    const [searchValue, setSearchValue] = useState('');

    // Handle changes to the search input
    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value); // Update the search input value in state
        onSearch(value); // Pass the new search value to the onSearch prop
    };

    // Render the search bar
    return (
        <div className="search-bar">
            <span className="material-symbols-sharp">search</span>
            <input
                id="searchbox"
                type="search"
                placeholder="Search for the task"
                value={searchValue}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchTodos;
