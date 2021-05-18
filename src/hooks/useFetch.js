import { useEffect, useState } from "react";
import { getCountries } from "../helpers/getCountries";


export const useFetch = ( url ) => {

    const [state, setState] = useState({ loading: true, error: null, data: [] });


    useEffect( () => {

        setState({ loading: true, error: null, data: [] });

        if( url ) {
            getCountries( url )
            .then( country => {
                setState( {
                    loading: false,
                    error: null,
                    data: country
                } );
            });
            
        }

    }, [ url ]);
    
    return state;

};
