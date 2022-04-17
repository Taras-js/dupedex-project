import * as icons from './constants'

type logo = 'logo';
type IconTypes = logo; 

interface IIconProps {
    type: IconTypes,
    color?: string,
    width?: string,
    height?: string,
    classname?: string 
}


const Icon: React.FC<IIconProps> = ({type}) => {
    
    return (
        <>
        <svg><path d={icons[type]}/></svg>
        </>
    )
}

export default Icon;