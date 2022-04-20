import React from 'react';

import styles from './layoutrow.module.css';

interface LayoutRowProps {
  children: React.ReactNode;
  rowHeight?: number;
}

const LayoutRow = (props: LayoutRowProps) => {
  const { children, rowHeight } = props;

  return (
    <div style={{ height: rowHeight < 1 ? `${rowHeight * 100}%` : rowHeight }} className={styles.row}>
      {children}
    </div>
  );
};

export default LayoutRow;
