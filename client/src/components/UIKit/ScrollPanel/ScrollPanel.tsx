import { cls } from "../../../utils/helper";

import styles from "./scrollpanel.module.css";

interface ScrollPanelProps {
  children: React.ReactNode;
  padding?: number | string;
  className?: string;
}

const ScrollPanel: React.FC<ScrollPanelProps> = (props: ScrollPanelProps) => {
  const {
    children, padding = 0, className,
  } = props;

  const innerPanelClass = cls(styles, "inner_panel", className);

  return (
    <div className={styles.panel}>
      <div className={innerPanelClass} style={{ padding }}>
        {children}
      </div>
    </div>
  );
};

export default ScrollPanel;
