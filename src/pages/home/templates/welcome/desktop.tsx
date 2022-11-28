import React from 'react';
import { Box, Text } from '@sanch941/lib';
import { Container } from '@ui';
import styled from 'styled-components';

import welcome from '@assets/images/welcome/welcome_bg_desktop.webp';
import men from '@assets/images/welcome/men_desktop.png';

export const DesktopWelcome = () => {
    return (
        <StyledContainer $height="100vh">
            <Container $height="100%" $flex fxd="column" jc="center">
                <StyledHeader $flex fxd="column" ai="flex-end" pTop={50}>
                    <Box $bottom={5}>
                        <StyledText fw={700} fz={16} lh={20} $color="#fff">
                            Dmitriy Bodrov
                        </StyledText>
                    </Box>
                    <StyledText fw={500} fz={14} lh={18} $color="#76FFEF">
                        Red Panda UX / UI / 3D
                    </StyledText>
                </StyledHeader>
                <Box>
                    <Text fw={700} fz={64} lh={82} $color="#fff">
                        SENIOR <br></br> UI / UX / 3D <br></br> DESIGNER
                    </Text>
                </Box>
                {/* <StyledImg src={men} /> */}
            </Container>
        </StyledContainer>
    );
};

const StyledImg = styled.img`
    position: absolute;
    right: 0;
    left: 40%;
    bottom: 0;
`;

const StyledContainer = styled(Box)`
    background: url(${welcome}) center / cover no-repeat;
`;

const StyledText = styled(Text)`
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

const StyledHeader = styled(Box)`
    position: absolute;
    padding-right: inherit;
    top: 0;
    right: 0;
`;
