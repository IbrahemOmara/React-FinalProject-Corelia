import { Route, Routes } from 'react-router-dom';
// import Nav from './shared/components/Header';
// import Config3 from './app/routes/Config3.js';
// import Config1 from './app/routes/Config1.js';
// import Config2 from './app/routes/Config2.js';
import EstateIV from './features/users/pages/EstateIV.js'
import EstateDU from './features/users/pages/EstateDU.js'
import Login from './features/users/pages/Auth/Login.js';
import Register from './features/users/pages/Auth/Register.js';
import Overviews from './features/users/pages/OverViews.js';
import Config1 from './app/routes/Config1.js'
import Config2 from './app/routes/Config2.js'
import Config3 from './app/routes/Config3.js'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Overviews />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/EstateIV' element={<EstateIV />}></Route>
        <Route path='/EstateDU' element={<EstateDU />}></Route>
        <Route path='/Config1' element={<Config1 />}></Route>
        <Route path='/Config2' element={<Config2 />}></Route>
        <Route path='/Config3' element={<Config3 />}></Route>
      </Routes>
    </div>
  );
}