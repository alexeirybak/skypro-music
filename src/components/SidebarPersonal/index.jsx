import { PersonIcon } from '../../utils/iconSVG/personIcon';
import * as S from './styles';

export const SidebarPersonal = () => {
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
      <PersonIcon />
    </S.SidebarPersonal>
  );
};
