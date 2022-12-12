import React, { FC } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

const myErrorHandler = (error: Error) => {
    const { name, message } = error;
    console.error('Ошибка', name, message);
};

export const ErrorBoundary: FC = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={myErrorHandler}
        >
            {children}
        </ReactErrorBoundary>
    );
};
