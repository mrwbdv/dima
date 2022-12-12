import React, { useRef } from 'react';
import { Box, pxRem, media, Portal, Text } from '@sanch941/lib';
import { useAppDispatch, useAppSelector } from '@store';
import { modalActions } from './model';
import Slider from 'react-slick';
import styled from 'styled-components';

import close from '@assets/images/close.svg';
import arrowRight from '@assets/images/slider/arrow-right.svg';
import arrowLeft from '@assets/images/slider/arrow-left.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Modal = () => {
    const { currentSlide, data } = useAppSelector(({ modal }) => ({
        currentSlide: modal.currentSlide,
        data: modal.data
    }));

    const sliderModal = useRef<Slider | null>(null);
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(modalActions.setCurrentSlide(-1));
    };

    // const handleEscape = useCallback(
    //     (event) => {
    //         if (event.keyCode === 27) closeModal();
    //     },
    //     [closeModal]
    // );

    // useEffect(() => {
    //     if (open) document.addEventListener('keydown', handleEscape, false);
    //     return () => {
    //         document.removeEventListener('keydown', handleEscape, false);
    //     };
    // }, [handleEscape, open]);

    return (
        <StyledModalContainer>
            <StyledContent
                className="modalContent"
                md={{ pLeft: 120, pRight: 120 }}
            >
                <StyledClose
                    role="button"
                    aria-label="close"
                    src={close}
                    onClick={closeModal}
                />
                <Slider
                    className="stories-modal-list"
                    slidesToShow={1}
                    initialSlide={currentSlide}
                    arrows={false}
                    infinite={true}
                    ref={(ref) => (sliderModal.current = ref)}
                >
                    {data.map((item, index) => (
                        <Box key={index}>
                            <StyledBox
                                md={{
                                    $flex: true,
                                    ai: 'center',
                                    jc: 'center'
                                }}
                            >
                                <Box
                                    md={{
                                        $flex: true,
                                        ai: 'center',
                                        jc: 'center',
                                        $width: '49%'
                                    }}
                                >
                                    <StyledImg
                                        src={require(`@assets/images/projects/projects-desktop/${item.id}.webp`)}
                                    />
                                </Box>
                                <Box
                                    padding={`${pxRem(30)} ${pxRem(20)}`}
                                    md={{ $width: '40%', padding: '0' }}
                                >
                                    <Text
                                        as="h2"
                                        fw={500}
                                        fz={24}
                                        lh={31}
                                        $color="#262626"
                                        tt="uppercase"
                                        md={{
                                            fz: 36,
                                            lh: 46
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Box $top={40}>
                                        <Text
                                            fw={500}
                                            fz={14}
                                            lh={30}
                                            $color="#262626"
                                            md={{
                                                fz: 16
                                            }}
                                        >
                                            {item.description}
                                        </Text>
                                    </Box>
                                    <Box $top={20} $bottom={10}>
                                        <Text
                                            fw={500}
                                            fz={16}
                                            lh={30}
                                            $color="#262626"
                                        >
                                            Completed works:
                                        </Text>
                                    </Box>
                                    <StyledStyledList>
                                        {item.completedWorks.map((item) => (
                                            <StyledListItem key={item}>
                                                {item}
                                            </StyledListItem>
                                        ))}
                                    </StyledStyledList>
                                </Box>
                            </StyledBox>
                        </Box>
                    ))}
                </Slider>
                <StyledArrow
                    src={arrowLeft}
                    onClick={() => sliderModal.current?.slickPrev()}
                />
                <StyledArrow
                    src={arrowRight}
                    onClick={() => sliderModal.current?.slickNext()}
                />
            </StyledContent>
        </StyledModalContainer>
    );
};

const StyledModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
    background-color: #fff;
    width: 100vw;
    height: 100%;
    overflow-y: auto;

    ${media.md} {
        height: 100vh;
        overflow-y: hidden;
    }
`;

const StyledClose = styled.img`
    position: fixed;
    width: ${pxRem(26)};
    height: ${pxRem(26)};
    top: ${pxRem(22)};
    right: ${pxRem(22)};
    cursor: pointer;
    z-index: 21;

    ${media.md} {
        top: ${pxRem(40)};
        right: ${pxRem(40)};
        width: ${pxRem(41)};
        height: ${pxRem(41)};
    }
`;

const StyledImg = styled.img``;

const StyledContent = styled(Box)`
    height: 100%;

    .stories-modal-list {
        height: 100%;
        display: flex;
        align-items: center;

        .slick-track {
            display: flex;
            align-items: center;
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

const StyledArrow = styled.img`
    display: none;
    ${media.md} {
        display: block;
        position: absolute;
        top: 50%;
        left: ${pxRem(50)};
        transform: translateY(-50%);
        height: ${pxRem(29)};
        width: ${pxRem(22)};
        cursor: pointer;

        &:last-child {
            left: auto;
            right: ${pxRem(50)};
        }
    }
`;

const StyledBox = styled(Box)`
    ${media.md} {
        column-gap: ${pxRem(90)};
    }
`;
