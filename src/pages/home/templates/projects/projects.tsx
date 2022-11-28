import { Box, pxRem } from '@sanch941/lib';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export const ProjectsTemplate = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const imagesArray = Array.from(Array(33).keys());

    const images = imagesArray.map((image) => {
        const img = require(`@assets/images/projects/${image + 1}.png`);
        return <StyledImg key={image} src={img} alt="Project Picture" />;
    });

    return (
        <Container>
            <Box $top={100}>
                <Slider {...settings}>{images}</Slider>
            </Box>
        </Container>
    );
};

const StyledImg = styled.img`
    max-height: ${pxRem(500)};
    max-width: ${pxRem(310)};
`;

const Container = styled(Box)`
    max-width: ${pxRem(970)};
    margin: 0 auto;
`;
