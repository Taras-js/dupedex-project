import { combinedClass } from '../../../utils/helper';
import styles from './tooltip.module.css';

interface TooltipProps {
    children: React.ReactNode,
    className?: string
    placement?: keyof typeof placemenTypes,
    title: string,
    bgColor?: string,
    textSize?: string
}

enum placemenTypes {
    top = 'tooltip__top',
    left = 'tooltip__left',
    right = 'tooltip__right',
    bottom = 'tooltip__bottom',
    }

const Tooltip:React.FC<TooltipProps> = (props: TooltipProps) => {
    const {
        children,
        className,
        placement = 'top',
        title,
        bgColor = "#202020",
        textSize = "16"
    } = props

    const arrowColorGenerator = (placement:string) => {
        const placementArray:Array<string> = ['top', 'right', 'bottom', 'left']
        let arrowColor:string = placementArray.map((el) => el == placement ? bgColor : 'transparent').join(' ')
        return arrowColor
    }

    const tooltipStyle = combinedClass(styles, 'tooltip', className, placemenTypes[`${placement}`])
    const tooltipTextStyle = combinedClass(styles, 'tooltip__text')

    return (
        <div className={combinedClass(styles, 'tooltip__wrapper')}>
            {children}
            <div className={tooltipStyle}>
                <div style={{fontSize:textSize, backgroundColor: bgColor}} className={tooltipTextStyle}>
                    {title}
                    <span style={{borderColor: `${arrowColorGenerator(placement)}`}} className={combinedClass(styles, 'tooltip__arrow', `tooltip__arrow_${placement}`)}></span>
                </div>
            </div>
        </div>
    )
}

export default Tooltip
