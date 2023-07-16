import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Login from './pages/Login_Page';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
<Routes>
  <Route path='/'index element={<App/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/Home' element={<Home/>}></Route>
</Routes>
 </BrowserRouter>
);

reportWebVitals();
