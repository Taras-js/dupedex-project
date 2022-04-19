import * as icons from './constants'
type IconTypes = keyof typeof icons;


interface IconProps {
    type?: IconTypes,
    width?: number,
    height?: number,
    widthOfViewbox?: number,
    heightOfViewbox?: number,
    color?: string,
    classname?: string
}


const Icon: React.FC<IconProps> = ({ type, width, height, classname, widthOfViewbox, heightOfViewbox, color }) => {
   
    return (
        <svg viewBox={`0 0 ${widthOfViewbox} ${heightOfViewbox}`} width={width} height={height} fill={color ? color : '#78838c'}>{icons[type]}</svg>
    )
}

export default Icon;