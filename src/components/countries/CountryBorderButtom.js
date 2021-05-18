
import React from 'react';
import { Link } from 'react-router-dom';

export const CountryBorderButtom = ({
    name,
    alpha2Code
}) => {
    return (
        <Link 
            className="btn btn-primary"
            to={ `./${ alpha2Code.toLocaleLowerCase() }` } 
        >
            { name }
        </Link> 
    )
}
