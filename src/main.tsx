// Из за использования webpack dll plugin, при импорта whydid you render
// через require появляется ошибка, поэтому его импортируем в es6
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@features/app';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

ReactDOM.render(<App />, document.getElementById('root'));
