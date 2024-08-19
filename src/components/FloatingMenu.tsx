import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/common';

type FloatingMenuProps = {
  sections: { id: string; label: string }[];
  isLightTheme: boolean;
};

const FloatingMenuWrapper = styled.div<{ isOpen: boolean, isLightTheme: boolean }>`
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  z-index: 9999;

  .menu-item {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 50%;
    background-color: ${({ isLightTheme }) =>
        isLightTheme
            ? colors.textTitleLight
            : colors.textTitleDark
    };
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.3s ease, opacity 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    &:hover .tooltip {
      opacity: 1;
      transform: translateX(-10px);
    }
  }
`;

const Tooltip = styled.div<{ isLightTheme: boolean }>`
  position: absolute;
  right: calc(100% + 1px);
  white-space: nowrap;
  background-color: ${({ isLightTheme }) =>
    isLightTheme
        ? colors.textTitleLight
        : colors.textTitleDark
  };
  color: ${({ isLightTheme }) =>
    isLightTheme
        ? colors.textBodyDark
        : colors.textBodyLight
  };
  padding: 3px 6px;
  border-radius: 3px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
`;


const MainButton = styled.div<{ isLightTheme: boolean, isOpen: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isLightTheme }) =>
    isLightTheme
        ? colors.textTitleLight
        : colors.textTitleDark
  };
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    background-color: ${({ isLightTheme }) =>
      isLightTheme
          ? colors.textTitleDark
          : colors.textTitleLight
    };

    &::before {
      color: ${({ isLightTheme }) =>
        isLightTheme
            ? colors.textTitleLight
            : colors.textTitleDark
      };
    }
  }

  &::before {
    content: '>';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(${({ isOpen }) => isOpen ? '-90deg' : '0deg'});
    transition: transform 0.3s ease;
    font-size: 24px;
    color: ${({ isLightTheme }) =>
      isLightTheme
          ? colors.textTitleDark
          : colors.textTitleLight
    };
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ isLightTheme }) =>
      isLightTheme
        ? 'rgba(0, 0, 0, 0.1)'  
        : 'rgba(255, 255, 255, 0.2)' 
    };
    transform: translate(-50%, -50%);
  }
`;

const FloatingMenu: React.FC<FloatingMenuProps> = ({ sections, isLightTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FloatingMenuWrapper isOpen={isOpen} isLightTheme={isLightTheme}>
      <MainButton onClick={toggleMenu} isLightTheme={isLightTheme} isOpen={isOpen}/>
      {sections.map((section) => (
        <div
          key={section.id}
          className="menu-item"
          onClick={() => scrollToSection(section.id)}
        >
          <Tooltip className="tooltip" isLightTheme={isLightTheme}>
            {section.label}
          </Tooltip>
        </div>
      ))}
    </FloatingMenuWrapper>
  );
};

export default FloatingMenu;
