import React from 'react';

import styles from './layoutitem.module.css';

interface LayoutItemProps {
  children: React.ReactNode;
  itemWidth?: number;
  noResize?: boolean;
}

const LayoutItem = (props: LayoutItemProps) => {
  const { children, itemWidth, noResize = false } = props;

  return (
    <div style={{ width: itemWidth <= 1 ? `${itemWidth * 100}%` : itemWidth, flexShrink: !noResize ? 1 : 0 }} className={styles.item}>
      {children}
    </div>
  );
};

export default LayoutItem;
