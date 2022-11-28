import { media, pxRem, Text } from '@sanch941/lib';
import styled from 'styled-components';

export const SectionTitle = styled(Text)`
    font-style: normal;
    font-weight: 500;
    font-size: ${pxRem(24)};
    line-height: ${pxRem(31)};
    text-transform: uppercase;
    color: #262626;

    ${media.md} {
        font-size: ${pxRem(36)};
        line-height: ${pxRem(46)};
    }
`;
