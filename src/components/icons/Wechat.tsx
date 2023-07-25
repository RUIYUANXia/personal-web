import React from 'react';

import { colors } from '../../styles/common';

type WechatProps = {
    iconFill?: string;
};

const Wechat = ({ iconFill = colors.textTitleLight }: WechatProps) => {
    return (
        <svg
            style={{ transform: 'translateY(3%)' }}
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            x="0"
            y="0"
            viewBox="0 0 50 50"
        >
            <path
                d="M19 6C9.625 6 2 12.504 2 20.5c0 4.27 2.059 8.11 5.816 10.89L5.18 39.306l8.246-5.106c2.289.719 5.082.973 7.777.676C23.391 39.109 28.332 42 34 42c1.723 0 3.316-.324 4.797-.766l6.848 3.832-1.91-6.55C46.312 36.375 48 33.395 48 30c0-6.21-5.402-11.164-12.25-11.895C34.406 11.152 27.367 6 19 6zm-6 8c1.102 0 2 .898 2 2 0 1.102-.898 2-2 2-1.102 0-2-.898-2-2 0-1.102.898-2 2-2zm12 0c1.102 0 2 .898 2 2 0 1.102-.898 2-2 2-1.102 0-2-.898-2-2 0-1.102.898-2 2-2zm9 6c6.746 0 12 4.535 12 10 0 2.957-1.508 5.55-3.996 7.395l-.559.417.91 3.122-3.25-1.825-.421.141c-1.399.469-2.996.75-4.684.75-6.746 0-12-4.535-12-10s5.254-10 12-10zm-4.5 6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm9 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"
                fill={iconFill}
            />
        </svg>
    );
};

export default Wechat;
