import styles from './Sidebar.module.css';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="../src/images/bg-sidebar-desktop.svg"
        alt="bg"
      />
    </aside>
  );
}
