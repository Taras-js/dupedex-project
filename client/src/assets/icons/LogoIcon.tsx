import React from 'react';

function LogoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="361" height="103" viewBox="0 0 361 103">
      <defs>
        <linearGradient x1="1" x2="0.088" y2="0.192" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#ffe4e6" />
          <stop offset="1" stopColor="#ffbbc1" />
        </linearGradient>
      </defs>
      <g transform="translate(-47 -19)">
        <rect width="58" height="63" rx="10" transform="translate(47 39)" fill="url(#linear-gradient)" />
        <text transform="translate(262 102)" fill="#292935" fontSize="86" fontFamily="Helvetica-Bold, HelveticaNeue" fontWeight="700" letterSpacing="-0.035em">
          <tspan x="-145.383" y="0">Dupe</tspan>
          <tspan y="0" fill="#ffd6d9" fontSize="80" fontFamily="HelveticaRounded-Bold, Helvetica Rounded">.</tspan>
          <tspan y="0" fill="#ffd6d9" fontSize="40">dex</tspan>
        </text>
      </g>
    </svg>

  );
}

export default LogoIcon;
