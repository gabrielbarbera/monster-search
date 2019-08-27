import React from 'react';
import './search-field.styles.css';

const SearchField = ({placeHolder, handleChange}) => {
    return (
        <input 
            className="search" 
            type="search" 
            placeholder={placeHolder}
            onChange={handleChange} 
        />
    )
}

export default SearchField;