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
                CDE&apos;s Computer Science Resource Bank contains a variety of materials for computer science educators, including standards, curricula, and materials for professional educator development as directed by <a href="https://leg.colorado.gov/bills/hb17-1184" target="_blank" rel="noopener noreferrer">H.B. 17-1884, Modern Technology Education in Public Schools</a>.
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
            <li>
                <strong>
                    <a rel="noopener noreferrer" target="_blank" href="https://tech.cornell.edu/cs-coaching-toolkit/">
                        Cornell Tech - CS Coaching Toolkit
                    </a>
                </strong>
                <br />
                This toolkit consists of a card deck containing over 150 ways for coaches to support CS teacher development. It is aligned with the CSTA CS Teacher Standards. The Computer Science Coaching Toolkit Card Deck was developed to support coaching activities related to Computer Science (CS) instruction in schools, districts, and other programs.
            </li>
            <li>
                <strong>
                    <a rel="noopener noreferrer" target="_blank" href="https://community.csteachers.org/home">
                        CSTA Virtual Community
                    </a>
                </strong>
                <br />
                The CSTA virtual community is a space to connect, engage and share with other CS teachers and advocates. Members are placed into community groups depending on what their professional role is as a CS teacher.
            </li>
            <li>
                <strong>
                    <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/1SA1N1fQkrPkkoTNKXOwm90g7kBZD6BBCN94i0HFlG2c/edit#gid=489597114">
                        Resource Directory for Online Instruction - Learning Keeps Going
                    </a>
                </strong>
                <br />
                ISTE & EdSurge are curating a list of free products offered by companies and organizations to support learning during extended school closures. Many of these offers were extended through June 2020 and are no longer available at discounted prices. Search the directory below and contact the company to see which products are offered free of charge.
            </li>
            <li>
                <strong>
                    <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/1I1S4Tq9Xy883WtcIPFMdTvOw7SHp9gP8HsNC2I7wwUg/edit#gid=1998323076">
                        Online CS and Coding Teaching Resources
                    </a>
                </strong>
                <br />
                This document has been created as a resource for K-12 public school teachers. It represents an effort to build an interdisciplinary resource spreadsheet to assist the teachers to transition to online teaching. It collects links to various tools, blogs, videos, tutorials, etc. that contain information or tools that may be useful for teaching students online. The document is seperated into categories as noted on the tabs. The categories include Math English Language Arts (ELA), Social Studies, Science, Visual Arts, Physical Education (PE), Computer Science, Languages, and more. Each category (tab) provides a list of resources (tools, blogs, videos, tutorials, etc.). Each resource has a title, brief description, appropriate grade level (where applicable), and link to the resource.
            </li>
            <li>
                <strong>
                    <a rel="noopener noreferrer" target="_blank" href="https://ceismc.gatech.edu/STEAMfromADistance">
                        STEAM from a Distance Education Resources
                    </a>
                </strong>
                <br />
                &quot;STEAM from a Distance&quot; is a Georgia Tech campus and community collaboration that seeks to help parents and educators to connect and discover STEAM learning experiences and tools for their students at home.
            </li>

        </ul>
    </div>
);

export default IndexPage;
