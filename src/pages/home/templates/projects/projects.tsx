import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box, media, pxRem } from '@sanch941/lib';
import { useAppDispatch, useAppSelector } from '@store';
import { modalActions } from '@features/modal/model';
import { Modal } from '@features/modal';
import { CSSTransition } from 'react-transition-group';
import arrowRight from '@assets/images/slider/arrow-right.svg';
import arrowLeft from '@assets/images/slider/arrow-left.svg';

import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imagesArray = Array.from(Array(33).keys());

const responsive = [
    { breakpoint: 576, settings: { slidesToShow: 3, centerMode: false } },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: false,
            variableWidth: true
        }
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
            <StyledImg
                key={image}
                src={img}
                alt="Project Picture"
                onClick={() => dispatch(modalActions.setCurrentSlide(index))}
            />
        );
    });

    return (
        <Container>
            <Box $top={100}>
                <Slider
                    speed={3000}
                    infinite={true}
                    responsive={responsive}
                    slidesToShow={3}
                    slidesToScroll={3}
                    arrows={false}
                    dots={true}
                    ref={(ref) => (sliderNav.current = ref)}
                >
                    {images}
                </Slider>
                <StyledArrow
                    src={arrowLeft}
                    onClick={() => sliderNav.current?.slickPrev()}
                />
                <StyledArrow
                    src={arrowRight}
                    onClick={() => sliderNav.current?.slickNext()}
                />
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
    padding: ${pxRem(7)};
    max-width: ${pxRem(195)};

    ${media.md} {
        max-width: 100%;
        padding: ${pxRem(10)};
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

const StyledArrow = styled.img`
    display: none;
    ${media.md} {
        display: block;
        position: absolute;
        top: 50%;
        left: -${pxRem(60)};
        transform: translateY(-50%);
        height: ${pxRem(29)};
        width: ${pxRem(22)};
        cursor: pointer;

        &:last-child {
            left: auto;
            right: -${pxRem(60)};
        }
    }
`;
