import React from 'react';
import { Container, SectionTitle } from '@ui';
import { Box, media, pxRem, Text } from '@sanch941/lib';
import styled from 'styled-components';

export const SkillsTemplate = () => {
    return (
        <Container>
            <Box md={{ $left: 145, $right: 145 }}>
                <SectionTitle>Skills</SectionTitle>
                <StyledContent
                    $top={20}
                    $bottom={67}
                    md={{ $flex: true, $bottom: 200 }}
                >
                    <StyledContainer>
                        <StyledColumn>
                            <StyledCell>FIGMA</StyledCell>
                            <StyledCell>PHOTOSHOP</StyledCell>
                            <StyledCell>ILLUSTRATOR</StyledCell>
                        </StyledColumn>
                        <StyledColumn>
                            <StyledCell>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                            </StyledCell>
                            <StyledCell>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                            </StyledCell>
                            <StyledCell>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                            </StyledCell>
                        </StyledColumn>
                    </StyledContainer>
                    <StyledContainer>
                        <StyledColumn>
                            <StyledCell>BLENDER</StyledCell>
                            <StyledCell>ADOBE AE</StyledCell>
                            <StyledCell>UX RESEARCH</StyledCell>
                        </StyledColumn>
                        <StyledColumn>
                            <StyledCell>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                            </StyledCell>
                            <StyledCell>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                            </StyledCell>
                            <StyledCell>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledStar>&#9733;</StyledStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                                <StyledGrayStar>&#9733;</StyledGrayStar>
                            </StyledCell>
                        </StyledColumn>
                    </StyledContainer>
                </StyledContent>
            </Box>
        </Container>
    );
};

const StyledContent = styled(Box)`
    column-gap: ${pxRem(26)};
`;

const StyledContainer = styled(Box)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
`;

const StyledColumn = styled.div`
    display: contents;

    font-weight: 500;
    font-size: ${pxRem(14)};
    line-height: ${pxRem(30)};
    color: #262626;
`;

const StyledGrayStar = styled.span`
    color: #e8e8e8;
    &:not(:last-child) {
        margin-right: ${pxRem(10)};
    }

    ${media.md} {
        &:not(:last-child) {
            margin-right: ${pxRem(20)};
        }
    }
`;

const StyledStar = styled.span`
    color: #0b0c0c;
    &:not(:last-child) {
        margin-right: ${pxRem(10)};
    }

    ${media.md} {
        &:not(:last-child) {
            margin-right: ${pxRem(20)};
        }
    }
`;

const StyledCell = styled.div`
    font-weight: 500;
    font-size: ${pxRem(16)};
    line-height: ${pxRem(30)};
    color: #262626;
    margin-bottom: ${pxRem(20)};
`;
const SkillsTitle = styled.p`
    font-weight: 500;
    font-size: ${pxRem(16)};
    line-height: ${pxRem(30)};
    color: #262626;
    text-transform: uppercase;
`;
