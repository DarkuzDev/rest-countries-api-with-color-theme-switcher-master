
import React from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { CountryDetailsInfo } from './CountryDetailsInfo';

export const CountryDetails = () => {

    const { countryId } = useParams();

    const { data, loading } = useFetch( `https://restcountries.eu/rest/v2/alpha?codes=${ countryId };` );
    const [ countries ] = (!!data && data);

    return (
        <div>
            {
                ( loading )
                ?
                <div className="container u-center-text">
                    <div className="lds-ring u-margin-top-medium"><div></div><div></div><div></div><div></div></div>
                </div>
                :
                <CountryDetailsInfo {...countries} />

            }
        </div>
    )
}
