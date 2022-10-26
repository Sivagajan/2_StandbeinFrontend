import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='admin' element={<AdminLogin/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
