import HomePage from './pages/Home.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute.component';
import Login from './pages/Login.page';
import About from './pages/About.page';
import AdminRoute from './components/AdminRoute.component';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />} >
              <Route index element={<HomePage />} />
              <Route path='/about' element={<About />} />
              <Route path='/users' element={<AdminRoute />} ></Route>
          </Route>  
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
