import { useRef } from 'react';
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

const placemenTypes = {
    top: 'ttp_text_top',
    left: 'ttp_text_left',
    right: 'ttp_text_right',
    bottom: 'ttp_text_bottom'
}

function Tooltip(props: TooltipProps) {
    const refSpantext = useRef<HTMLSpanElement>(null)
    const {
        children,
        className,
        placement = 'top',
        title,
        bgColor = "#202020",
        textSize = "16"
    } = props


    if (null !== refSpantext.current) {
        refSpantext.current.style.fontSize = `${textSize}px`;
        refSpantext.current.style.backgroundColor = bgColor;
    }
    
    const ttpStyle = combinedClass(styles, 'ttp', className)
    const ttpTextStyle = combinedClass(styles, 'ttp_text', placemenTypes[`${placement}`])

    return (
        <div className={ttpStyle}>
                <span ref={refSpantext} className={ttpTextStyle}>{title}</span>
            {children}
        </div>
    )
}

export default Tooltip
