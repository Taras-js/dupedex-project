import React from 'react';
import { combinedClass } from '../../../utils/helper';

import styles from './panel.module.css';

interface PanelProps {
  children: React.ReactNode;
  padding?: number;
  className?: string;
}

const Panel = (props: PanelProps) => {
  const { children, padding = 0, className } = props;

  const panelClass = combinedClass(styles, 'panel', className);

  return (
    <div className={panelClass} style={{ padding }}>
      {children}
    </div>
  );
};

export default Panel;
