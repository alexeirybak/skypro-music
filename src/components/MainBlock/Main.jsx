import { Nav } from '../NavBlock/Nav';
import { SidebarCenterblock } from '../SidebarCenterblockBlock/SidebarCenterblock';
import { MainSidebar } from '../MainSidebarBlock/MainSidebar';
import styles from './main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <Nav />
      <SidebarCenterblock />
      <MainSidebar />
    </main>
  );
}
