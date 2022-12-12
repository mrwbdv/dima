import React, { Suspense } from 'react';
import { HomePage } from '@pages/home';
import { Switch, Route } from 'react-router-dom';

// Ленивые компоненты

export const Router = () => {
    return (
        <Suspense fallback={null}>
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
        </Suspense>
    );
};
