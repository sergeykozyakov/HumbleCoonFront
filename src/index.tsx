import React from 'react';
import ReactDOM from 'react-dom';

import 'fontsource-roboto';

import { hot } from 'react-hot-loader/root';

import Hello from './modules/hello/index';

const HelloApp = hot(Hello);

ReactDOM.render(<HelloApp />, document.getElementById('app'));
