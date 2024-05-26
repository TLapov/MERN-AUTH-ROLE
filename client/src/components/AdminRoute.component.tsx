import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/store';

const AdminRoute = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user.userType == 'admin' ? <Outlet /> : <Navigate to='/login' replace />;
};

export default AdminRoute;