
import React from 'react';

export const FormCountries = ({ handleForm }) => {

    return (
        <div className="form-container">
            <form>
                <div className="form__input">
                    <i className="fas fa-search"></i>
                    <input
                        className="form__input--country" 
                        type="text"
                        placeholder="Search for a country..."
                        onChange={ handleForm }
                    />
                </div>
            </form>
        </div>
    )
}
