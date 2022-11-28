import { pxRem } from '@sanch941/lib';
import styled from 'styled-components';

export const Divider = styled.hr`
    max-width: ${pxRem(310)};
    margin: 0;
    height: 1px;
    background: #ececec;
    border: 0;
`;
