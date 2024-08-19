import React from 'react';

import { colors } from '../../styles/common';

type IconProps = {
    iconFill?: string;
};

const KubernetesIcon = ({ iconFill = colors.textTitleLight }: IconProps) => {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <path
                fill={iconFill}
                fillRule="evenodd"
                d="M5.374 15c-.335 0-.66-.153-.874-.431l-3.254-4.172a1.15 1.15 0 01-.214-.978l1.165-5.207c.074-.345.298-.623.605-.776l4.715-2.32c.15-.078.317-.116.485-.116.168 0 .335.038.485.115L13.2 3.426c.308.153.532.432.606.777l1.165 5.207c.074.345 0 .7-.214.978L11.5 14.566c-.214.268-.54.434-.875.434h-5.25zm7.718-5.835l.031.008a.308.308 0 01.26.371.306.306 0 01-.396.223h-.004l-.003-.001-.003-.001-.03-.007-.05-.01a2.548 2.548 0 01-.274-.106 2.87 2.87 0 00-.533-.156.242.242 0 00-.171.063 4.76 4.76 0 00-.131-.023 3.972 3.972 0 01-1.764 2.212c.015.042.032.083.051.123a.239.239 0 00-.023.18c.074.17.165.332.271.484.06.078.114.16.164.244l.028.057.012.025a.306.306 0 01-.381.44.307.307 0 01-.172-.18 2.608 2.608 0 00-.01-.02l-.028-.058a2.545 2.545 0 01-.089-.28 2.835 2.835 0 00-.21-.512.242.242 0 00-.156-.095 5.926 5.926 0 01-.03-.053l-.035-.064a3.97 3.97 0 01-2.824-.007l-.069.125a.249.249 0 00-.132.064c-.104.17-.184.355-.237.548a2.525 2.525 0 01-.088.28l-.025.05-.013.027v.001a.307.307 0 11-.553-.261l.014-.03.026-.052c.05-.085.104-.166.164-.244.108-.156.2-.322.277-.496a.302.302 0 00-.028-.173l.056-.133A3.972 3.972 0 014.22 9.532l-.134.023a.34.34 0 00-.176-.062 2.872 2.872 0 00-.533.156c-.09.04-.181.075-.274.105l-.05.011-.03.007H3.02l-.002.002h-.005a.308.308 0 01-.397-.349.306.306 0 01.261-.245l.004-.001h.003l.006-.002c.024-.006.054-.014.076-.018.097-.013.195-.021.293-.023.186-.013.37-.043.549-.09a.422.422 0 00.131-.133l.128-.037a3.938 3.938 0 01.624-2.752l-.097-.087a.338.338 0 00-.062-.176 2.854 2.854 0 00-.455-.319 2.557 2.557 0 01-.254-.148 1.129 1.129 0 01-.063-.05l-.004-.004a.323.323 0 01-.076-.45.295.295 0 01.244-.107.365.365 0 01.213.08l.022.017c.016.013.034.026.046.037.071.067.139.139.202.213.125.137.263.262.412.372.056.03.121.036.182.018l.11.078a3.938 3.938 0 012.552-1.224l.007-.129a.332.332 0 00.1-.157 2.844 2.844 0 00-.034-.554 2.555 2.555 0 01-.042-.29v-.053-.025-.004-.004A.306.306 0 018 2.82a.308.308 0 01.306.337v.087a2.53 2.53 0 01-.041.29 2.85 2.85 0 00-.035.553.242.242 0 00.1.153v.007l.007.13c.967.087 1.87.522 2.54 1.223l.116-.083a.34.34 0 00.186-.02c.149-.11.287-.235.412-.373a2.53 2.53 0 01.202-.213l.051-.04.017-.014a.308.308 0 01.472.388.307.307 0 01-.09.09c-.008.005-.017.012-.025.02l-.043.033a2.549 2.549 0 01-.254.148 2.865 2.865 0 00-.455.32.24.24 0 00-.058.172 4.458 4.458 0 01-.05.044l-.058.053c.542.806.769 1.783.637 2.745l.123.036c.031.056.077.101.132.132.18.048.364.078.55.09.097.003.195.01.292.024l.058.013zm-2.875-3.1l-1.308.925-.004-.002a.27.27 0 01-.43-.205v-.001l-.091-1.598a3.183 3.183 0 011.833.882zM7.754 7.818h.492l.306.381-.11.476L8 8.886l-.443-.213-.11-.475.307-.381zM7.29 5.24c.107-.024.216-.043.326-.056l-.09 1.6-.008.004a.268.268 0 01-.293.256.27.27 0 01-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825zM5.296 6.663l1.201 1.071-.001.007a.269.269 0 01-.106.462l-.001.005-1.54.443a3.134 3.134 0 01.447-1.988zm1.608 2.846l-.612 1.474a3.16 3.16 0 01-1.27-1.586L6.6 9.13l.003.003a.265.265 0 01.18.029.27.27 0 01.117.341l.004.006zm1.806 1.896c-.572.13-1.17.1-1.726-.088l.777-1.4h.001a.27.27 0 01.475-.001h.006l.779 1.402a3.286 3.286 0 01-.312.087zm1.004-.416L9.096 9.5l.001-.003a.269.269 0 01.296-.37l.003-.004 1.593.269a3.147 3.147 0 01-1.275 1.597zm1.442-2.343L9.61 8.201l-.002-.006a.27.27 0 01-.185-.343.27.27 0 01.08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default KubernetesIcon;
