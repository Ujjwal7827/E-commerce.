import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';

// Lazy-loaded pages
const Shop = lazy(() => import('./pages/shop/Shop'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Contact = lazy(() => import('./pages/contact/Contact'));

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<div className="text-center mt-10 text-lg font-semibold">Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
      <ToastContainer/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
