import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/store';
import Navigation from './Navigation.component';

const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user ?
      <main className='main-container d-flex'>
        <Navigation />
        <Outlet />
      </main> 
      :  <Navigate to='/login' replace />;
};

export default PrivateRoute;