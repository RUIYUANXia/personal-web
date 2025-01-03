import React from 'react';
import styled from 'styled-components';

import { colors, textColor } from '../styles/common';
import { PageWrapper } from './Common';
import Link from './Link';
import Typewriter from './Typewritter';

export const footerHeight = 120;

// background-color: ${props =>
//     props.theme.color === 'light'
//         ? colors.backgroundSecondaryLight
//         : colors.backgroundSecondaryDark};
const Footer = styled.footer`
    border-top: 2px solid ${colors.borderLight};
    border-color: ${props =>
        props.theme.color === 'light' ? colors.borderLight : colors.borderDark};
    height: ${footerHeight}px;
`;

const ModifiedPageWrapper = styled(PageWrapper)`
    justify-content: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SocialMediaList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const SocialMediaListItem = styled.li`
    padding: 0 7px;
    margin: 0;

    &::before {
        content: '';
    }
`;

const SocialMediaLink = styled(Link)`
    ${textColor.title}
`;

type FooterProps = {};

// eslint-disable-next-line no-empty-pattern
const FooterComponent = ({}: FooterProps) => {
    return (
        <Footer>
            <ModifiedPageWrapper>
                <SocialMediaList>
                    <SocialMediaListItem>
                        <SocialMediaLink to="https://github.com/RUIYUANXia">
                            Github
                        </SocialMediaLink>
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <SocialMediaLink to="https://www.linkedin.com/in/ryxia2002/">
                            LinkedIn
                        </SocialMediaLink>
                    </SocialMediaListItem>
                    <SocialMediaListItem>
                        <SocialMediaLink to="mailto:xiaruiyuan2002@gmail.com">
                            Email
                        </SocialMediaLink>
                    </SocialMediaListItem>
                </SocialMediaList>
                <strong>
                    {' '}
                    😉{' '}
                    <Typewriter
                        words={[
                            "Please don't hesitate to get in touch with me!",
                            'Sincere gratitude to the open source on GitHub!'
                        ]}
                        delay={100}
                    />
                </strong>
            </ModifiedPageWrapper>
        </Footer>
    );
};

export default FooterComponent;
