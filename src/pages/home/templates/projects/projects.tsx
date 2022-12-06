import React from 'react';
import { Box, media, pxRem } from '@sanch941/lib';
import OwlCarousel from 'react-owl-carousel';
import styled from 'styled-components';

const imagesArray = Array.from(Array(33).keys());

const options = {
    margin: 20,
    loop: true,
    autoWidth: true,
    responsive: {
        0: {
            dots: false,
            center: true
        },
        768: {
            dots: true,
            center: false,
            autoWidth: false
        }
    }
};

export const ProjectsTemplate = () => {
    const images = imagesArray.map((image) => {
        const img = require(`@assets/images/projects/${image + 1}.png`);
        return <StyledImg key={image} src={img} alt="Project Picture" />;
    });

    return (
        <Container>
            <Box $top={100}>
                <OwlCarousel className="owl-theme" {...options}>
                    {images}
                </OwlCarousel>
            </Box>
        </Container>
    );
};

const StyledImg = styled.img`
    max-width: ${pxRem(195)};

    ${media.md} {
        max-width: ${pxRem(310)};
    }
`;

const Container = styled(Box)`
    max-width: ${pxRem(970)};
    margin: 0 auto;

    ${media.md} {
        ${Box} {
            & > .owl-carousel > .owl-dots {
                margin-top: ${pxRem(30)};
            }
        }
    }
`;
