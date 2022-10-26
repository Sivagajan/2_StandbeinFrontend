import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import Guard from './components/Guard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route element={<Guard />}>
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
