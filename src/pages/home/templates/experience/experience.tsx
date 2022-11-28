import React from 'react';
import { Box, media, pxRem } from '@sanch941/lib';
import { Container, SectionTitle, Divider } from '@ui';
import styled from 'styled-components';

export const ExperienceTemplate = () => {
    return (
        <Container>
            <Box
                $top={60}
                $bottom={60}
                md={{ $top: 100, $bottom: 100, $left: 145, $right: 145 }}
            >
                <SectionTitle>
                    I help my clients To stand out from the competition with the
                    effective and simple design
                </SectionTitle>
                <StyledBox
                    $top={40}
                    md={{ $top: 30, $flex: true, jc: 'space-between' }}
                >
                    <Box>
                        <Title>UI / UX</Title>
                        <Divider />
                        <Box $top={20}>
                            <StyledList>
                                <li>
                                    Collecting information about the project and
                                    its audience
                                </li>
                                <li>Designing user scenarios</li>
                                <li>
                                    Style development, drawing up instructions
                                    on fonts, colors and sizes
                                </li>
                                <li>Creation of layouts and prototypes</li>
                                <li>
                                    Drawing the interface in graphic editors
                                </li>
                                <li>UX product and interface research</li>
                                <li>Building and learning cjm</li>
                                <li>Mentoring and leading the ux department</li>
                            </StyledList>
                        </Box>
                    </Box>
                    <Box $top={40} md={{ $top: 0 }}>
                        <Title>3D</Title>
                        <Divider />
                        <Box $top={20}>
                            <StyledList>
                                <li>UV-Mapping</li>
                                <li>High-poly and Low-poly</li>
                                <li>Retopology</li>
                                <li>Texturing</li>
                                <li>Interiors design</li>
                                <li>Animation</li>
                                <li>3D Ui elements and illustration</li>
                                <li>Blender 3D</li>
                            </StyledList>
                        </Box>
                    </Box>
                </StyledBox>
            </Box>
        </Container>
    );
};

const StyledBox = styled(Box)`
    ${media.md} {
        column-gap: ${pxRem(110)};
    }
`;

const StyledList = styled.ul`
    li {
        font-weight: 500;
        font-size: ${pxRem(14)};
        line-height: ${pxRem(30)};
        color: #262626;
        list-style-type: disc;

        ${media.md} {
            font-size: ${pxRem(16)};
        }
    }
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: ${pxRem(64)};
    line-height: ${pxRem(82)};
    letter-spacing: 0.1em;
    color: #262626;
    margin-bottom: ${pxRem(16)};
`;
