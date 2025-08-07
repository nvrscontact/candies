import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';

import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs';
import Security from './Pages/Security';
import Promotions from './Pages/Promotions';
import Store from './Pages/Store';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Order from './Pages/Order';

function App() {

  return (
    <>
    <section className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/security' element={<Security/>} />
            <Route path='/promotions' element={<Promotions/>} />
            <Route path='/store' element={<Store/>} />
            <Route path='/order' element={<Order/>} />

          </Route>
        </Routes>
      </Router>
    </section>
    </>
  )
}

export default App
