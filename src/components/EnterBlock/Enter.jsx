import React, { useState, useEffect } from 'react';
import * as S from './styles';

export function Enter() {
  const [status, setStatus] = useState(localStorage.getItem('status') || false);
  const [showEnterButton, setShowEnterButton] = useState(true);

  function changeStatus() {
    setStatus(true);
    setShowEnterButton(false);
  }

  function showPlayer() {
    alert('Вы вошли');
  }

  useEffect(() => {
    localStorage.setItem('status', status);
  }, [status]);

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action='#'>
            <a href='../'>
              <img src='../img/logo_modal.png' alt='logo' />
            </a>
            <S.ModalFormLoginInput>
              <S.ModalInput type='text' name='login' placeholder='Почта' />
              <S.ModalInput
                type='password'
                name='password'
                placeholder='Пароль'
              />
              {status && (
                <S.ModalInputConfirmPassword
                  type='password'
                  name='password'
                  placeholder='Повторите пароль'
                />
              )}
            </S.ModalFormLoginInput>
            <S.ModalFormLoginButtons>
              {status ? '' : (
                <S.ModalButtonEnter onClick={showPlayer}>
                  Войти
                </S.ModalButtonEnter>
              )}
              <S.ModalBtnSignup onClick={changeStatus} $status={status}>
                Зарегистрироваться
              </S.ModalBtnSignup>
            </S.ModalFormLoginButtons>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}
