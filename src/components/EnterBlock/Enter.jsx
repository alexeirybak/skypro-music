import React, { useState, useEffect } from 'react';
import styles from './enter.module.css';

export function Enter() {
  const [status, setStatus] = useState(localStorage.getItem('status') || false);

  function changeStatus() {
    setStatus(true);
  }

  function showPlayer() {
    alert('Регистрация успешно пройдена');
  }

  useEffect(() => {
    localStorage.setItem('status', status);
  }, [status]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action='#'>
            <a href='../'>
              <div className={styles.modal__logo}>
                <img src='../img/logo_modal.png' alt='logo' />
              </div>
            </a>
            <div className={styles.modal__form_login_input}>
              <input
                className={styles.modal__input}
                type='text'
                name='login'
                placeholder='Почта'
              />
              <input
                className={styles.modal__input}
                type='password'
                name='password'
                placeholder='Пароль'
              />
              <input
                className={styles.modal__input}
                type='password'
                name='password'
                placeholder='Повторите пароль'
                style={{
                  display: status ? 'block' : 'none',
                }}
              />
            </div>
            <div className={styles.modal__form_login_buttons}>
              <button
                className={styles.modal__btn_enter}
                onClick={showPlayer}
                style={{
                  display: status ? 'none' : 'block',
                }}
              >
                <a href='../index.html'>Войти</a>
              </button>

              <button
                className={
                  status === false
                    ? styles.modal__btn_signup
                    : styles.modal__btn_enter
                }
                onClick={status ? showPlayer : changeStatus}
              >
                <a href='signup.html'>Зарегистрироваться</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
