import React from 'react';
import { Container, SectionTitle } from '@ui';
import { Box, pxRem } from '@sanch941/lib';
import styled from 'styled-components';

export const SkillsTemplate = () => {
    return (
        <Container>
            <SectionTitle>Skills</SectionTitle>
            {/* <Box $top={24} md={{ $top: 20, $bottom: 200, $flex: true }}>
                <Box $flex jc="space-between" ai="center">
                    <SkillsTitle>Figma</SkillsTitle>
                    <Box>
                        <span>&#9733;</span>
                    </Box>
                </Box>
                <Box></Box>
            </Box> */}
        </Container>
    );
};

const SkillsTitle = styled.p`
    font-weight: 500;
    font-size: ${pxRem(16)};
    line-height: ${pxRem(30)};
    color: #262626;
    text-transform: uppercase;
`;
