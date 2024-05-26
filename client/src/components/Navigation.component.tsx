import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/store';

function Navigation() {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Nav className="flex-column">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        { user.userType == 'admin' && <Link to={'/users'}>Users</Link> }
    </Nav>
  )
}

export default Navigation
