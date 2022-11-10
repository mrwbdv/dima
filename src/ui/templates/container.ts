import { media, pxRem } from '@sanch941/lib';
import styled from 'styled-components';

export const Container = styled.div<{ mobilePadding?: boolean }>`
    padding: ${({ mobilePadding = true }) => mobilePadding && `0 ${pxRem(20)}`};

    ${media.md} {
        padding: 0;
        max-width: ${pxRem(1300)};
        margin: 0 auto;
    }
`;
