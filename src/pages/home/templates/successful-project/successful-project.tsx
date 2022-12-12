import React from 'react';
import { Container, Divider, SectionTitle } from '@ui';
import { Box, IsMobile, Text, pxRem } from '@sanch941/lib';
import styled from 'styled-components';

export const SuccessfulProjectTemplate = () => {
    return (
        <Container>
            <Box
                $top={60}
                $bottom={51}
                $left="5%"
                $right="5%"
                lg={{ $top: 63, $left: 145, $right: 145, $bottom: 100 }}
            >
                <SectionTitle>
                    Strong UX and beautiful UI - key to a successful project
                </SectionTitle>
                <Box $top={20} md={{ $flex: true, jc: 'space-between' }}>
                    <Box>
                        <Box $bottom={10} $top={10}>
                            <StyledText>
                                I have a solid experience in complex interfaces
                            </StyledText>
                        </Box>
                        <Divider />
                        <Box $bottom={10} $top={10}>
                            <StyledText>
                                I keep up with design trends
                            </StyledText>
                        </Box>
                        <Divider />
                        <Box $bottom={10} $top={10}>
                            <StyledText>
                                I am hardly responsible for deadlines
                            </StyledText>
                        </Box>
                        <IsMobile>
                            <Divider />
                        </IsMobile>
                    </Box>
                    <Box>
                        <Box $bottom={10} $top={10}>
                            <StyledText>I justify my decisions</StyledText>
                        </Box>
                        <Divider />
                        <Box $bottom={10} $top={10}>
                            <StyledText>I do UX research</StyledText>
                        </Box>
                        <Divider />
                        <Box $bottom={10} $top={10}>
                            <StyledText>I am open to everything new</StyledText>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <StyledSubtitle>WHY CHOOSE ME</StyledSubtitle>
        </Container>
    );
};

const StyledText = styled.p`
    font-weight: 500;
    font-size: ${pxRem(16)};
    line-height: ${pxRem(30)};
    color: #262626;
`;

const StyledSubtitle = styled(Text)`
    display: inline-block;
    transform-origin: top left;
    position: absolute;
    left: ${pxRem(15)};
    top: 50%;
    transform: rotate(-90deg) translate(-50%);
    font-weight: 700;
    font-size: ${pxRem(16)};
    line-height: ${pxRem(20)};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #a5a5a5;
`;
