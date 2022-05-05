import { cls } from "../../../utils/helper";

import styles from "./panel.module.css";

interface PanelProps {
  children: React.ReactNode;
  padding?: number | string;
  className?: string;
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  const { children, padding = 0, className } = props;

  const panelClass = cls(styles, "panel", className);

  return (
    <div className={panelClass} style={{ padding }}>
      {children}
    </div>
  );
};

export default Panel;
