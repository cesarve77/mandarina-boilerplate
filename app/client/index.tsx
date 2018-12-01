import React from 'react'
import { hot } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import '../lib/tables'
import 'antd/dist/antd.css';
import './styles.css';


import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (Component: React.ComponentClass) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
}

render(App);

if (hot && hot['accept']) {
    hot['accept']('./App', () => {
        const NextRootContainer = require('./App').default;
        render(NextRootContainer);
    });
}
