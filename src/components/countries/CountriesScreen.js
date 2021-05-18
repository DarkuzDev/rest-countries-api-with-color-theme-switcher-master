
import React, { useContext } from 'react';


import { CountryContext } from '../../country/CountryContext';
import { useFetch } from '../../hooks/useFetch';
import { countryReducerTypes } from '../../types/countryReducerTypes';
import { CardList } from './CardList';
import { FormCountries } from './FormCountries';
import { SelectRegion } from './SelectRegion';

export const CountriesScreen = () => {

    let countries;
    const { url, dispatch } = useContext(CountryContext);

    const { data, loading } = useFetch( url.url );
    countries = (!!data && data) || [];

    const handleForm = ( e ) => {
        e.preventDefault();

        const inputValue = e.target.value;

        if( inputValue.length >= 2 ) {
            
            dispatch({
                type: countryReducerTypes.inputSearch,
                payload: `${ inputValue }`
            });
        }

        if( inputValue.length === 0 ) {
            dispatch({
                type: countryReducerTypes.home,
                payload: ['de', 'us', 'br', 'is', 'af', 'dz']
            })
        }

    }

    const handleSelect = ( e ) => {

        if( e.target.value ) {

            dispatch({
                type: countryReducerTypes.region,
                payload: `${ e.target.value }`
            });

        }
    }

    return (
        <div>
            <div className="header-items container">
                <FormCountries handleForm={ handleForm }/>

                <SelectRegion handleSelect={ handleSelect }/>
            </div>

            {   
                ( loading ) 
                    ? 
                    <div className="container u-center-text">
                        <div className="lds-ring u-margin-top-medium"><div></div><div></div><div></div><div></div></div>
                    </div>
                    :
                    ( (Array.isArray( countries ))  )
                        ?
                        <CardList 
                            countries={ countries }
                        />
                        :
                        <p className="u-margin-top-medium u-center-text alert alert-info container"> Country not found! </p>

            }

        </div>
    )
}
