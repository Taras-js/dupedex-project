import React from 'react';

import styles from './layoutrow.module.css';

interface LayoutRowProps {
  children: React.ReactNode;
  rowHeight?: number;
  noResize?: boolean;
}

const LayoutRow = (props: LayoutRowProps) => {
  const { children, rowHeight, noResize = false } = props;

  return (
    <div style={{ height: rowHeight < 1 ? `${rowHeight * 100}%` : rowHeight, flexShrink: !noResize ? 1 : 0 }} className={styles.row}>
      {children}
    </div>
  );
};

export default LayoutRow;
