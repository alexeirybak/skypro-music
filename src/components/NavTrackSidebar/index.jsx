import { Nav } from '../Nav';
import { SidebarCenterblock } from '../SidebarCenterBlock';
import { MainSidebar } from '../MainSidebar';
import * as S from './styles.js';

export const NavTrackSidebar = ({
  isLoading,
  ...props
}) => {
  return (
    <S.NavTrackSidebar>
      <Nav />
      <SidebarCenterBlock
      isLoading={isLoading}
        {...props}
      />
      <MainSidebar isLoading={isLoading} />
    </S.NavTrackSidebar>
  );
};
