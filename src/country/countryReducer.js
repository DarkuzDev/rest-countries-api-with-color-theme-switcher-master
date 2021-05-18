import { countryReducerTypes } from "../types/countryReducerTypes";

export const countryReducer = ( state = {}, action ) => {

    let url;

    switch( action.type ) {

        case countryReducerTypes.region:

            url = `https://restcountries.eu/rest/v2/region/${ action.payload }`;

            return { url };

        case countryReducerTypes.inputSearch:

            url = `https://restcountries.eu/rest/v2/name/${ action.payload }`

            return { url };

        case countryReducerTypes.countryDetails:

            url = `https://restcountries.eu/rest/v2/alpha?codes=${ action.payload };`

            return { url };

        default:
            
            return state;

    }

}
