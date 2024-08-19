import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { colors } from '../styles/common';

interface SkillCardProps {
    title: string;
    image: React.ReactNode;
    description: string;
    isLightTheme?: boolean;
}

const SkillCardContainer = styled.div`
    perspective: 1000px;
    perspective-origin: center;
    width: 200px;
    height: 300px;
    margin: 20px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

const SkillCardInner = styled.div<{ isLightTheme?: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    ${({ isLightTheme }) => {
        const shadowColor = isLightTheme ? colors.borderLight : colors.backgroundDark;
        return `box-shadow: 0 4px 8px ${shadowColor};`;
    }}
    border-radius: 20px;
    pointer-events: none;

    ${SkillCardContainer}:hover & {
        pointer-events: auto;
        transform: rotateY(180deg);
    }
`;

const SkillCardFace = styled.div<{ back?: boolean; isLightTheme?: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: ${({ back }) => (back ? 'column' : 'row')};
    align-items: center;
    justify-content: center;
    background-color: ${({ back, isLightTheme }) =>
        isLightTheme
            ? back
                ? colors.textTitleLight
                : colors.textTitleDark
            : back
            ? colors.textTitleDark
            : colors.textTitleLight};
    color: ${({ back, isLightTheme }) =>
        isLightTheme
            ? back
                ? colors.textTitleDark
                : colors.textTitleLight
            : back
            ? colors.textTitleLight
            : colors.textTitleDark};
    transform: ${({ back }) => (back ? 'rotateY(180deg)' : 'none')};
    padding: 5px;
    border-radius: 20px;

    svg {
        width: 100px;
        height: 100px;
        max-width: 100%;
        max-height: 100%;
    }
    
    h2 {
        margin: 10px 0 5px 0;
    }
`;

const SkillCard: React.FC<SkillCardProps> = ({
    title,
    image,
    description,
    isLightTheme
}) => {
    return (
        <SkillCardContainer>
            <SkillCardInner isLightTheme={isLightTheme}>
                <SkillCardFace isLightTheme={isLightTheme}>{image}</SkillCardFace>
                <SkillCardFace back isLightTheme={isLightTheme}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </SkillCardFace>
            </SkillCardInner>
        </SkillCardContainer>
    );
};

const CarouselContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;

    .slick-slider {
        overflow: hidden;
    }

    .slick-list {
        overflow: hidden;
    }

    .slick-track {
        display: flex;
        align-items: center;
    }

    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
    }

    .slick-prev,
    .slick-next {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        z-index: 2;
    }

    .slick-prev:before,
    .slick-next:before {
        font-size: 50px;
        color: white;
    }

    .slick-prev {
        left: 5px;
    }

    .slick-next {
        right: 5px;
    }
`;

const SkillCarousel: React.FC<{
    skills: SkillCardProps[];
    isLightTheme: boolean;
}> = ({ skills, isLightTheme }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <CarouselContainer>
            <Slider {...settings}>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <SkillCard {...skill} isLightTheme={isLightTheme} />
                    </div>
                ))}
            </Slider>
        </CarouselContainer>
    );
};

export default SkillCarousel;
