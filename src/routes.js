import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/not-found';
import { Login } from './pages/login';
import { Favourites } from './pages/favourites';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={< Login />} />
      <Route path='/favourites' element={< Favourites />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
