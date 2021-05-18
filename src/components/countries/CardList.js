import React from 'react';
import { CardItem } from './CardItem';

export const CardList = ({ countries }) => {

    return (
        <>
            <div className="project-list container">
                {
                    countries.map( country => (
                        <CardItem 
                            key={ country.name }
                            {...country}
                        /> 
                    ))
                }
            </div>   
        </>
    )
}
