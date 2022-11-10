import React from 'react';
import { Box, pxRem, Text } from '@sanch941/lib';
import { Container } from '@ui';
import styled from 'styled-components';

import welcome from '@assets/images/welcome/welcome_bg_desktop.png';
import men from '@assets/images/welcome/men_desktop.png';

export const DesktopWelcome = () => {
    return (
        <StyledContainer>
            <Container>
                <Box $flex fxd="column" ai="flex-end" pTop={50}>
                    <Box $bottom={5}>
                        <StyledText fw={700} fz={16} lh={20} $color="#fff">
                            Dmitriy Bodrov
                        </StyledText>
                    </Box>
                    <StyledText fw={500} fz={14} lh={18} $color="#76FFEF">
                        Red Panda UX / UI / 3D
                    </StyledText>
                </Box>
                <Box pTop={240} pBottom={321}>
                    <Text fw={700} fz={64} lh={82} $color="#fff">
                        SENIOR <br></br> UI / UX / 3D <br></br> DESIGNER
                    </Text>
                </Box>
                <StyledImg src={men} />
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
    text-transform: upper-case;
    letter-spacing: 0.1em;
`;
