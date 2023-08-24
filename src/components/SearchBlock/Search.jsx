import * as S from './styles'

export function Search() {
  return (
    <S.CenterblockSearch>
      <S.Glass>
        <S.IconSearch
          xmlns='http://www.w3.org/2000/svg'
          width='13'
          height='13'
          viewBox='0 0 13 13'
          fill='none'
        >
          <circle
            cx='6.48533'
            cy='6.48477'
            r='5.5'
            transform='rotate(-38.7469 6.48533 6.48477)'
            stroke='black'
          />
        </S.IconSearch>
        <S.Handle>
          <S.IconSearchHandle
            xmlns='http://www.w3.org/2000/svg'
            width='5'
            height='6'
            viewBox='0 0 5 6'
            fill='none'
          >
            <path
              d='M0.927734 0.774414L4.37008 5.06397'
              stroke='black'
              strokeLinecap='round'
            />
          </S.IconSearchHandle>
        </S.Handle>
      </S.Glass>
      <S.SearchText
        type='search'
        placeholder='Поиск'
        name='search'
      />
    </S.CenterblockSearch>
  );
}
