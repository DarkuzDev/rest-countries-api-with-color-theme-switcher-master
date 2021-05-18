import React from 'react';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../../helpers/numberWithComas';

export const CardItem = React.memo(({ 
    name,
    alpha2Code,
    population,
    region,
    capital,
    flag
}) => {

    return (
        <div className="project__list--item">
            <div className="project__list--item--img">
                <img src={ flag } alt={ `${ name } Flag` }/>
            </div>
            <div className="project__list--item--content">
                <h2 className="nameCountry">{ name }</h2>
                <p className="populationCountry"><span>Population:</span> { numberWithCommas( population ) }</p>
                <p className="regionCountry"><span>Region:</span> { region }</p>
                <p className="capitalCountry"><span>Capital:</span> { capital } </p>

                <Link 
                    className="btn btn-secondary"
                    to={ `./country/${ alpha2Code.toLocaleLowerCase() }` } 
                >
                    Details
                </Link> 
            </div>
        </div>
    )
})
