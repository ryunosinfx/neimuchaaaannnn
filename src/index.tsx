import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as style from './css/common.css';

import CounterContainer from "./js/components/container/CounterContainer";


const body: any = document.getElementsByTagName('body')[0];
body.style.padding = 0;
body.style.margin = 0;

const rootEl = document.getElementById('root');

rootEl ? ReactDOM.render(<CounterContainer />, rootEl) : false;
