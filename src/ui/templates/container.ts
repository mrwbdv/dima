import { media, pxRem, Box } from '@sanch941/lib';
import styled from 'styled-components';

export const Container = styled(Box)`
    padding: 0 ${pxRem(15)};

    ${media.md} {
        max-width: ${pxRem(1270)};
        margin: 0 auto;
    }
`;
