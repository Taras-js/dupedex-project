const LogoIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="359" height="106" viewBox="0 0 359 106">
              <defs>
                <linearGradient id="linear-gradient" x1="1" x2="0.088" y2="0.192" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#ffe4e6"/>
                <stop offset="1" stop-color="#ffbbc1"/>
                </linearGradient>
            </defs>
            <rect width="58" height="63" rx="10" transform="translate(0 23)" fill="url(#linear-gradient)"/>
            <text transform="translate(215 86)" fill="#292935" font-size="86"  font-weight="700" letter-spacing="-0.035em">
                <tspan x="-146.401" y="0">Dupe</tspan>
                <tspan y="0" font-size="15"> </tspan>
                <tspan y="0" fill="#ffd6d9" font-size="80" font-family="serif"  font-weight="600">.</tspan>
                <tspan y="0" font-size="15"> </tspan>
                <tspan y="0" fill="#ffd6d9" font-size="40">dex</tspan>
            </text>
            {/* <ellipse transform="translate(274 76)" cx="5" cy="5" rx="5" ry="5" fill="#ffd6d9"/> */}
        </svg>

    )
}

export default LogoIcon;