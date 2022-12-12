import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Box, media, pxRem, Text } from '@sanch941/lib';
import { useAppDispatch, useAppSelector } from '@store';
import { modalActions } from '@features/modal/model';
import { Modal } from '@features/modal';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imagesArray = Array.from(Array(33).keys());

const responsive = [
    // { breakpoint: 1200, settings: { slidesToShow: 5 } },
    // { breakpoint: 992, settings: { slidesToShow: 4 } },
    // { breakpoint: 820, settings: { slidesToShow: 3 } },
    // { breakpoint: 767, settings: { slidesToShow: 5 } },
    { breakpoint: 576, settings: { slidesToShow: 3, centerMode: false } },
    {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: true, dots: false }
    }
];

export const ProjectsTemplate = () => {
    const dispatch = useAppDispatch();
    const sliderNav = useRef<Slider | null>(null);

    const { currentSlide } = useAppSelector(({ modal }) => ({
        currentSlide: modal.currentSlide
    }));

    const images = imagesArray.map((image, index) => {
        const img = require(`@assets/images/projects/projects-mobile/${
            image + 1
        }.webp`);
        return (
            <Box $width={195} key={image}>
                <StyledImg
                    src={img}
                    alt="Project Picture"
                    onClick={() =>
                        dispatch(modalActions.setCurrentSlide(index))
                    }
                />
            </Box>
        );
    });

    return (
        <Container>
            <Box $top={100}>
                <Slider
                    speed={3000}
                    infinite={true}
                    responsive={responsive}
                    // className={css(style.slider)}
                    // responsive={responsive}
                    slidesToShow={3}
                    slidesToScroll={3}
                    arrows={false}
                    dots={true}
                    ref={(ref) => (sliderNav.current = ref)}
                >
                    {images}
                </Slider>
            </Box>

            <CSSTransition
                in={currentSlide !== -1}
                timeout={500}
                classNames="modal"
                unmountOnExit
            >
                <Modal />
            </CSSTransition>
        </Container>
    );
};

const StyledImg = styled.img`
    cursor: pointer;
    // max-width: ${pxRem(195)};

    ${media.md} {
        // max-width: ${pxRem(310)};
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

const StyledStyledList = styled.ul``;

const StyledListItem = styled.li`
    list-style-type: disc;
    font-weight: 500;
    font-size: ${pxRem(16)};
    line-height: ${pxRem(30)};
    color: #262626;
`;
