import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

interface SkillCardProps {
  title: string;
  image: string;
  description: string;
}

const SkillCardContainer = styled.div`
  perspective: 1000px;
  width: 200px;
  height: 300px;
  margin: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const SkillCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: rotateY(180deg);
  }
`;

const SkillCardFace = styled.div<{ back?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ back }) => (back ? '#2980b9' : '#fff')};
  color: ${({ back }) => (back ? 'white' : 'black')};
  transform: ${({ back }) => (back ? 'rotateY(180deg)' : 'none')};
  padding: 10px;
`;

const SkillCard: React.FC<SkillCardProps> = ({ title, image, description }) => {
  return (
    <SkillCardContainer>
      <SkillCardInner>
        <SkillCardFace>
          <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </SkillCardFace>
        <SkillCardFace back>
          <h3>{title}</h3>
          <p>{description}</p>
        </SkillCardFace>
      </SkillCardInner>
    </SkillCardContainer>
  );
};

const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SkillCarousel: React.FC<{ skills: SkillCardProps[] }> = ({ skills }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillCard {...skill} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default SkillCarousel;
