import { Nav } from '../NavBlock/Nav';
import { SidebarCenterblock } from '../SidebarCenterblockBlock/SidebarCenterblock';
import { MainSidebar } from '../MainSidebarBlock/MainSidebar';
import styles from './main.module.css';

export function Main({ isLoading }) {
  return (
    <main className={styles.main}>
      <Nav />
      <SidebarCenterblock isLoading={isLoading} />
      <MainSidebar isLoading={isLoading}/>
    </main>
  );
}
