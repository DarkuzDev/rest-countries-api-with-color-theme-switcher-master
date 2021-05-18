
import React from 'react';

export const SelectRegion = ({ handleSelect }) => {
    return (
        <div className="filterContinents">
            <select name="filterContinents" id="filterContinents" onChange={ handleSelect }>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>  
                <option value="oceania">Oceania</option>  
            </select>
        </div>
    )
}
