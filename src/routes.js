import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Main } from './pages/main';
import { Favourites } from './pages/favourites';
import { Category } from './pages/category';
import { NotFound } from './pages/not-found';
import { ProtectedRoute } from './components/ProtectedRoute';

export const AppRoutes = ({ user, onAuthButtonClick }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route path='/' element={<Main />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/category/:id' element={<Category />} />
      </Route>
      <Route
        path='/login'
        element={<Login onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
