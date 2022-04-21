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


const Icon: React.FC<IconProps> = ({ type, width=50, height=50, classname='icon', widthOfViewbox=25, heightOfViewbox=25, color='#78838c' }) => {
   
    return (
        <svg className={classname}  viewBox={`0 0 ${widthOfViewbox} ${heightOfViewbox}`} width={width} height={height} fill={color}>{icons[type]}</svg>
    )
}

export default Icon;