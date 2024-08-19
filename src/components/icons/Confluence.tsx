import React from 'react';

import { colors } from '../../styles/common';

type IconProps = {
    iconFill?: string;
};

const ConfluenceIcon = ({ iconFill = colors.textTitleLight }: IconProps) => {
    return (
        <svg
            fill={iconFill}
            height="800px"
            width="800px"
            version="1.1"
            id="Icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            enableBackground="new 0 0 24 24"
            xmlSpace="preserve"
        >
            <path
                d="M0.11,19.32c-0.21,0.36-0.1,0.82,0.26,1.04l4.96,3.06c0.36,0.22,0.83,0.11,1.05-0.25c0,0,0-0.01,0-0.01
        c3.15-5.26,3.77-4.5,13.17-0.03c0.38,0.18,0.83,0.02,1.02-0.36c0,0,0-0.01,0.01-0.02l2.36-5.35c0.17-0.38,0-0.83-0.38-1
        c-1.04-0.49-3.1-1.46-4.96-2.36C5.98,8.39,2.09,16.19,0.11,19.32z M23.89,4.69c0.21-0.36,0.1-0.82-0.26-1.04L18.68,0.6
        c-0.35-0.23-0.83-0.15-1.06,0.21c-0.01,0.01-0.02,0.03-0.03,0.05c-3.16,5.28-3.8,4.48-13.15,0.04C4.05,0.71,3.6,0.87,3.42,1.25
        c0,0,0,0.01-0.01,0.02L1.04,6.62c-0.17,0.38,0,0.83,0.38,1c1.04,0.49,3.11,1.46,4.97,2.36C18.01,15.61,21.9,7.85,23.89,4.69
        L23.89,4.69z"
            />
        </svg>
    );
};

export default ConfluenceIcon;
