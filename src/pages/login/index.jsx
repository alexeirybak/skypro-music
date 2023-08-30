import { NavLink } from 'react-router-dom'
import * as S from './styles';

export function Login({ onAuthButtonClick }) {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action='#'>
            <S.ModalFormLoginLink href='../'>
              <S.ModalFormLoginImg src='../img/logo_modal.png' alt='logo' />
            </S.ModalFormLoginLink>
            <S.ModalFormLoginInput>
              <S.ModalInput type='text' name='login' placeholder='Почта' />
              <S.ModalInput
                type='password'
                name='password'
                placeholder='Пароль'
              />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginButtons>
              <S.ModalButtonEnter onClick={onAuthButtonClick}>
                Войти
              </S.ModalButtonEnter>
              <NavLink to='/register'>
                <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
              </NavLink>
            </S.ModalFormLoginButtons>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}
