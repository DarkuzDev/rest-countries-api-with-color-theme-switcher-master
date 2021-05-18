
import React from 'react';
import { numberWithCommas } from '../../helpers/numberWithComas';
import { useFetch } from '../../hooks/useFetch';
import { CountryBorderButtom } from './CountryBorderButtom';

export const CountryDetailsInfo = ({ 
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
 }) => {

    let url = 'https://restcountries.eu/rest/v2/alpha?codes=';

    for(let i = 0; i < borders.length; i++) {
        url += `${ borders[i].toLocaleLowerCase() };`
    }

    const { data, loading } = useFetch( url );
    const countryBorders = (!!data && data);


    let languagesCountry = ' ';
    languages.forEach(  language => {
        languagesCountry += `${ language.name },`;
    });

    return (
        <div className="country__details container">
            <div className="country__details--container">
                <div className="country__details--img">
                    <img src={ flag } alt={ name } />
                </div>

                <div className="country__details--content">
                    <h2>{ name }</h2>

                    <div className="container__primary--secondary">
                        <div className="country__primary--content">
                            <p><span>Native Name: </span>{ nativeName }</p>
                            <p><span>Population: </span>{ numberWithCommas( population ) }</p>
                            <p><span>Region: </span>{ region }</p>
                            <p><span>Sub Region: </span>{ subregion }</p>
                            <p><span>Capital: </span>{ capital }</p>
                        </div>

                        <div className="country__secondary--content">
                            <p><span>Top Level Domain: </span>{ topLevelDomain[0] }</p>
                            <p><span>Currencies: </span>{ currencies[0].name }</p>
                            <p><span>Languages: </span>{ languagesCountry.slice(0, languagesCountry.length - 1) }</p>
                        </div>
                    </div>

                    <div className="country__tertiary--content">
                        {
                            ( loading )
                            ?
                            <>
                                <h3>Border Countries</h3>
                                <div className="container u-center-text">
                                    <div className="lds-ring u-margin-top-medium"><div></div><div></div><div></div><div></div></div>
                                </div>
                            </>
                            :
                            ( (Array.isArray( countryBorders ))  )
                            ?
                            <>
                            <h3>Border Countries</h3>
                            <div className="button__list">
                                {
                                    countryBorders.map( countryBorder => (
                                        <CountryBorderButtom 
                                            key={ countryBorder.name }
                                            {...countryBorder} 
                                        />
                                    ) )
                                }
                            </div>
                            </>
                            :
                            <div className="country__secondary--content">
                                <p><span>Info: </span> This country doesn't have a border country </p>
                            </div>

                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
