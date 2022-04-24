import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
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
