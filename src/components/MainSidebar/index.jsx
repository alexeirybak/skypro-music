import { NavLink } from 'react-router-dom';
import { musicCategory } from '../../constants';
import { PersonIcon } from '../../utils/iconSVG/personIcon';
import * as S from './styles';

export const MainSidebar = ({ isLoading }) => {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <PersonIcon/>
      </S.SidebarPersonal>

      <S.SidebarBlock>
        <S.SidebarList>
          {musicCategory.map((category) => (
            <S.SidebarItem key={category.id}>
              {isLoading ? (
                <NavLink
                  to={`/category/${category.id}`}
                >
                  <S.SidebarImg src={category.imgUrl} alt={category.alt} />
                </NavLink>
              ) : (
                <S.SleketonSidebarImg />
              )}
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
