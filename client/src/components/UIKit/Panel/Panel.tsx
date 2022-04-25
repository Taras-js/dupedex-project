import classNames from 'classnames';
import styles from './panel.module.css';

interface PanelProps {
  children: React.ReactNode;
  padding?: number | string;
  className?: string;
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  const { children, padding = 0, className } = props;

  const panelClass = classNames(styles.panel, className);

  return (
    <div className={panelClass}>
      <div className={styles.innerpanel} style={{ padding }}>
        {children}
      </div>
    </div>
  );
};

export default Panel;
