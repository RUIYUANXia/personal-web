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
  perspective-origin: center;
  width: 200px;
  height: 300px;
  margin: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
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
  border-radius: 20px;
  pointer-events: none;

  ${SkillCardContainer}:hover & {
    pointer-events: auto; /* 允许指针事件以触发翻转 */
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
  background-color: ${({ back }) => (back ? '#2980b9' : '#fff000')};
  color: ${({ back }) => (back ? 'white' : 'black')};
  transform: ${({ back }) => (back ? 'rotateY(180deg)' : 'none')};
  padding: 10px;
  border-radius: 20px;
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
  width: 90%;
  margin: 0 auto;
  position: relative;

  .slick-slider {
    overflow: hidden; /* 确保内容不会溢出容器 */
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center; /* 确保卡片垂直居中 */
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto; /* 确保卡片高度自动适应内容 */
  }

  .slick-prev, .slick-next {
    width: 50px; 
    height: 50px; 
    border-radius: 50%;
    z-index: 2;
  }

  .slick-prev:before, .slick-next:before {
    font-size: 50px; /* 调整箭头图标的大小 */
    color: white; /* 调整箭头图标的颜色 */
  }

  .slick-prev {
    left: 5px;
  }

  .slick-next {
    right: 5px;
  }
`;

const SkillCarousel: React.FC<{ skills: SkillCardProps[] }> = ({ skills }) => {
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
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
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
