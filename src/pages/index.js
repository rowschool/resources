import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';

import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './AppContainer';

const IndexPage = () => {
  return (
    <div>
        <AppContainer />
    </div>
  )
}

export default IndexPage;
