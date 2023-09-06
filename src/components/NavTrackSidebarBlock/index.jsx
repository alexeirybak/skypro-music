import { Nav } from '../NavBlock';
import { SidebarCenterBlock } from '../SidebarCenterblockBlock';
import { MainSidebar } from '../MainSidebarBlock';
import * as S from './styles.js';

export const NavTrackSidebar = ({ isLoading, music, error }) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <SidebarCenterBlock
        isLoading={isLoading}
        music={music}
        error={error}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};
