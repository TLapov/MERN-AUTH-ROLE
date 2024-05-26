import HomePage from './pages/Home.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute.component';
import Login from './pages/Login.page';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />} >
              <Route index element={<HomePage />} />
          </Route>  
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;


// https://github.com/zahid-afridi/Role_Base_Auth/blob/main/client/src/redux/AuthSlice.js