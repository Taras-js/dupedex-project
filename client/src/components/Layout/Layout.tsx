import React from 'react';

import styles from './layout.module.css';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Layout;
