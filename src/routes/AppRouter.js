
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { CountriesScreen } from '../components/countries/CountriesScreen';
import { CountryDetails } from '../components/countries/CountryDetails';
import { Headerbar } from '../components/ui/Headerbar';
  

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Headerbar />

                <Switch>
                    <Route path="/" exact component={ CountriesScreen } />
                    <Route path="/country/:countryId" exact component={ CountryDetails } />

                    <Redirect to="/" />
                </Switch>

            </div>
        </Router>
    )
}
