import { Box, media, pxRem, Text } from '@sanch941/lib';
import React from 'react';
import styled from 'styled-components';

export const AboutTemplate = () => {
    return (
        <StyledContainer>
            <StyledContent $bottom={60} md={{ $bottom: 100 }}>
                <StyledBox gridArea="1 / 1 / 2 / 2">
                    <StyledSectionTitle>10+</StyledSectionTitle>
                    <Box $top={17} md={{ $top: 10 }}>
                        <StyledText>
                            Years of experience in the UX/UI design
                        </StyledText>
                    </Box>
                </StyledBox>
                <StyledBox
                    $flex
                    ai="center"
                    gridArea="2 / 1 / 3 / 2"
                    gridAreaLarge="2 / 1 / -1 / 2"
                >
                    <StyledText>
                        I am aways in touch on weekdays, during business hours
                    </StyledText>
                </StyledBox>
                <StyledBox
                    $flex
                    fxd="column"
                    jc="space-between"
                    ai="center"
                    gridArea="1 / 2 / 3 / 3"
                    gridAreaLarge="1 / 2 / -1 / 3"
                >
                    <Box>
                        <StyledSectionTitle ta="center">40+</StyledSectionTitle>
                        <StyledText>Responsible for deadlines</StyledText>
                    </Box>
                    <Box>
                        <StyledSectionTitle ta="center">6+</StyledSectionTitle>
                        <StyledText>Major projects</StyledText>
                    </Box>
                </StyledBox>
                <StyledBox gridAreaLarge="1 / 3 / 2 / 4">
                    <StyledSectionTitle>100+</StyledSectionTitle>
                    <Box $top={17} md={{ $top: 10 }}>
                        <StyledText>UX research I have done</StyledText>
                    </Box>
                </StyledBox>
                <StyledBox gridAreaLarge="1 / 4 / 2 / 5">
                    <StyledSectionTitle>4+</StyledSectionTitle>
                    <Box $top={17} md={{ $top: 10 }}>
                        <StyledText>My Juniors Up to Middle level</StyledText>
                    </Box>
                </StyledBox>
                <StyledBox
                    $flex
                    ai="center"
                    gridArea="4 / 1 / -1 / -1"
                    gridAreaLarge="2 / 3 / 3 / -1"
                    padding={`${pxRem(45)}`}
                >
                    <StyledText>
                        Accustomed to working closely with the development and
                        marketing department
                    </StyledText>
                </StyledBox>
            </StyledContent>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    max-width: ${pxRem(1136)};
    margin: 0 auto;
    padding: 0 ${pxRem(15)};
`;

const StyledContent = styled(Box)`
    display: grid;
    grid-template-rows: repeat(4, 229px);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    ${media.md} {
        grid-template-rows: repeat(2, 229px);
        grid-template-columns: repeat(3, 1fr) 0.7fr;
    }
`;

const StyledBox = styled(Box)<{ gridArea?: string; gridAreaLarge?: string }>`
    background-color: #000;
    border-radius: 10px;
    padding: ${pxRem(35)} ${pxRem(30)};
    grid-area: ${({ gridArea }) => gridArea};
    ${media.md} {
        grid-area: ${({ gridAreaLarge }) => gridAreaLarge};
    }
`;

const StyledSectionTitle = styled(Text).attrs({
    fw: 700,
    fz: 64,
    lh: 82,
    $color: '#fff',
    md: {
        fz: 70,
        lh: 89
    }
})`
    text-transform: uppercase;
`;

const StyledText = styled(Text).attrs({
    fw: 400,
    fz: 14,
    lh: 30,
    $color: '#fff',
    md: {
        fz: 18
    }
})``;
