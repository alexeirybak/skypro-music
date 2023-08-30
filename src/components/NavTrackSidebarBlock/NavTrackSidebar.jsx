import { Nav } from '../NavBlock/Nav';
import { SidebarCenterBlock } from '../SidebarCenterblockBlock/SidebarCenterblock';
import { MainSidebar } from '../MainSidebarBlock/MainSidebar';
import * as S from './styles.js';


export function NavTrackSidebar({ isLoading }) {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <SidebarCenterBlock isLoading={isLoading} />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
}
