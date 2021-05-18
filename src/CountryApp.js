
import React, { useReducer } from 'react'
import { CountryContext } from './country/CountryContext'
import { countryReducer } from './country/countryReducer';
import { AppRouter } from './routes/AppRouter';

const init = () => {

    let url = `https://restcountries.eu/rest/v2/alpha?codes=`;
    
    const countries = ['de', 'us', 'br', 'is', 'af', 'dz'];

    for( let i = 0; i < countries.length; i++ ) {
        url += `${ countries[i] };`;
    }

    return { url };

}

export const CountryApp = () => {

    const [ url, dispatch ] = useReducer(countryReducer, {}, init);

    return (

        <CountryContext.Provider value={ { url, dispatch } }>
            <AppRouter />
        </CountryContext.Provider>

    )
}
