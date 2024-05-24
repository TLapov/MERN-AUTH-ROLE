import HomePage from './pages/Home.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppSelector } from './app/store';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const count = useAppSelector((state) => state.auth.user);
  console.log(count);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
