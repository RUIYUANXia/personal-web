import React from 'react';

import { colors } from '../../styles/common';

type IconProps = {
    iconFill?: string;
};

const DatabricksIcon = ({ iconFill = colors.textTitleLight }: IconProps) => {
    return (
        <svg 
            role="img" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            fill={iconFill}
        >
            <title>Databricks</title>
            <path d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z"/>
        </svg>
    );
};

export default DatabricksIcon;
