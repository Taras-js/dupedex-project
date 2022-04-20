import React from 'react';

import styles from './layoutitem.module.css';

interface LayoutItemProps {
  children: JSX.Element;
  itemWidth?: number;
}

const LayoutItem = (props: LayoutItemProps) => {
  const { children, itemWidth } = props;

  return (
    <div style={{ width: itemWidth < 1 ? `${itemWidth * 100}%` : itemWidth }} className={styles.item}>
      {children}
    </div>
  );
};

export default LayoutItem;
