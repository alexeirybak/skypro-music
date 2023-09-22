import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegUser } from '../../api/registerUser';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function RegPage() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [primaryButton, setPrimaryButton] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const isLoginModeFromStorage = JSON.parse(
      localStorage.getItem('isLoginMode'),
    );
    setIsLoginMode(isLoginModeFromStorage || false);
  }, []);

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
    } else {
      try {
        const result = await RegUser(email, password);
        setPrimaryButton(true);
        localStorage.setItem('isLoginMode', JSON.stringify(true));
        setIsLoginMode(true);
        navigate('/login');
      } catch (error) {
        setError(error.message);
      } finally {
        setPrimaryButton(false);
      }
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to='/login'>
          <S.ModalLogo>
            <S.ModalLogoImage src='/img/logo_modal.png' alt='logo' />
          </S.ModalLogo>
        </Link>

        <>
          <S.Inputs>
            <S.ModalInput
              type='text'
              name='login'
              placeholder='Почта'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <S.ModalInput
              type='password'
              name='password'
              placeholder='Пароль'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <S.ModalInput
              type='password'
              name='repeat-password'
              placeholder='Повторите пароль'
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value);
              }}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton onClick={handleRegister} disabled={primaryButton}>
              {primaryButton ? 'Загрузка...' : 'Зарегистрироваться'}
            </S.PrimaryButton>
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  );
}
