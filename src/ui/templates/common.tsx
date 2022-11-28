import React from 'react';
import { Box } from '@sanch941/lib';
import { Footer } from './footer';

export const CommonTemplate = ({ children, ...props }) => {
    return (
        <Box {...props}>
            {children}
            <Footer />
        </Box>
    );
};
