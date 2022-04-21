import React from 'react';

import styles from './panel.module.css';

interface PanelProps {
  children: React.ReactNode;
  padding?: number;
}

const Panel = (props: PanelProps) => {
  const { children, padding = 0 } = props;

  return (
    <div className={styles.panel} style={{ padding }}>
      {children}
    </div>
  );
};

export default Panel;
