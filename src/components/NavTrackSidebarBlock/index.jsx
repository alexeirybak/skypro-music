import { Nav } from '../NavBlock';
import { SidebarCenterBlock } from '../SidebarCenterblockBlock';
import { MainSidebar } from '../MainSidebarBlock';
import * as S from './styles.js';


export const NavTrackSidebar = ({ isLoading }) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <SidebarCenterBlock isLoading={isLoading} />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
}
