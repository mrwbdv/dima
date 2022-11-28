import React from 'react';
import { Box, pxRem } from '@sanch941/lib';
import { Container } from './container';
import mail from '@assets/images/footer/mail.svg';
import telegram from '@assets/images/footer/telegram.svg';
import twitter from '@assets/images/footer/twitter.svg';
import linkedin from '@assets/images/footer/linkedin.svg';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <Box bg="#000000" pTop={55} pBottom={55} md={{ pTop: 64, pBottom: 64 }}>
            <Container
                $flex
                fxd="column-reverse"
                ai="center"
                md={{ fxd: 'row', jc: 'space-between' }}
            >
                <Box $flex ai="center" jc="center">
                    {icons.map(({ icon, to }, idx) => (
                        <StyledLink target="_blank" href={to} key={idx}>
                            <StyledSocialIcon src={icon} />
                        </StyledLink>
                    ))}
                </Box>
                <Box $bottom={47} md={{ $bottom: 0 }}>
                    <StyledMailLink
                        target="_blank"
                        href="mailto:dmitriy@red-panda.pro"
                    >
                        dmitriy@red-panda.pro
                    </StyledMailLink>
                </Box>
            </Container>
        </Box>
    );
};

const StyledSocialIcon = styled.img`
    height: ${pxRem(26)};
    width: ${pxRem(26)};
`;

const StyledLink = styled.a`
    &:not(:first-child) {
        margin-left: ${pxRem(104)};
    }
`;

const StyledMailLink = styled.a`
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${pxRem(16)};
    line-height: ${pxRem(30)};
    color: #a5a5a5;
    background: url(${mail}) no-repeat left center;
    padding-left: ${pxRem(43)};
`;

const icons = [
    {
        icon: twitter,
        to: 'https://twitter.com/LeadUIUX'
    },
    {
        icon: linkedin,
        to: 'https://www.linkedin.com/in/redpanda-art/'
    },
    {
        icon: telegram,
        to: 'https://t.me/LeadUIUX'
    }
];
