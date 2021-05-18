
import React from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { CountryDetailsInfo } from './CountryDetailsInfo';

export const CountryDetails = ({ history }) => {

    const { countryId } = useParams();

    const { data, loading } = useFetch( `https://restcountries.eu/rest/v2/alpha?codes=${ countryId };` );
    const [ countries ] = (!!data && data);

    const handleButtonGoBack = () => {
        history.goBack();
    }

    return (
        <div>

            <button 
                className="btn btn-primary"
                onClick={ handleButtonGoBack }
            >
            <i className="fas fa-arrow-left"></i> Back
            </button>

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
