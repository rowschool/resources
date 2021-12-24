import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';

import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './AppContainer';

const IndexPage = () => (
    <div className="content-container">
        <div className="header-text">
            <h1 className="header-text-logo">Row School</h1>
            <h3 className="header-text-description">Resource Library</h3>
        </div>

        <ul className="resource-list">
            <li>
                <strong>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.cde.state.co.us/computerscience/computer-science-resource-bank">
                        Colorado Department of Education Computer Science Resource Bank
                    </a>
                </strong>
                <br />
                CDE's Computer Science Resource Bank contains a variety of materials for computer science educators, including standards, curricula, and materials for professional educator development as directed by <a href="https://leg.colorado.gov/bills/hb17-1184" target="_blank" rel="noopener noreferrer">H.B. 17-1884, Modern Technology Education in Public Schools</a>.
            </li>
            <li>
                <strong>
                    <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/14Wuv4FWMGHhLwcmuzVMNc_6gnguNT4TQonkC5SSIAOU/edit#gid=0">
                        Unplugged Activities to Introduce Computer Science Concepts
                    </a>
                </strong>
                <br />
                Living GoogleDoc of unplugged curricula covering algorithms, events, loops, conditionals, variables, functions, debugging, abstraction, networks and the Internet, and data analysis
            </li>
        </ul>
    </div>
);

export default IndexPage;
