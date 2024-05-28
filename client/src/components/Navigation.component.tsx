import { Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/store';
import { fetchAPi } from '../app/api.service';
import logoutIcon from '../assets/logout-icon.svg';
import { logout } from '../features/auth/auth.slice';

function Navigation() {
  const { user } = useAppSelector((state) => state.auth);
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
    const res = await fetchAPi('/auth/logout', 'POST');
    if(res.success) {
      dispach(logout());
      navigate('/');
    }
  }
  return (
    <Nav className="flex-column align-items-center bg-light h-100" style={{width: '140px', minWidth: '140px'}}>
        <NavLink className="mt-3" to={'/'}>Home</NavLink>
        <NavLink className="mt-3" to={'/about'}>About</NavLink>
        { user.userType == 'admin' && <NavLink className="mt-3" to={'/users'}>Users</NavLink> }
        <div className="mt-auto w-100 d-flex align-items-center justify-content-center px-2 mb-2">
            <span className='me-3'>Logout</span>
            <img 
              src={logoutIcon} 
              alt="logout-icon" 
              height="24px" 
              width="24px"
              style={{cursor: 'pointer'}}
              onClick={handleLogout} 
            />
        </div>
    </Nav>
  )
}

export default Navigation
