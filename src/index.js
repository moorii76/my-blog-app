import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './css/common.css';
import BlogApp from './APP/BlogApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <BlogApp />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
