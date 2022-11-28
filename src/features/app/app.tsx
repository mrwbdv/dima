import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { Router } from './router';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@features/error-boundary';
import { GlobalStyles } from './global-styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const App: FC = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <GlobalStyles />

            <BrowserRouter basename="/payservice">
                <Router />
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>
);
