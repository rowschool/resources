import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PropTypes from 'prop-types';

const AppContainer = function(props) {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
};

export default AppContainer;
