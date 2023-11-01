import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarPage from './container/NavbarPage';
import FooterPage from './container/FooterPage';
import AboutPage from './pages/AboutPage';
import ShopWidePage from './pages/ShopWidePage';
import ShopCartPage from './pages/ShopCartPage';
import ShopComparePage from './pages/ShopComparePage';
import ShopFilterPage from './pages/ShopFilterPage';
import ShopGridRightPage from './pages/ShopGridRightPage';
import ShopInvoicePage from './pages/ShopInvoicePage';

import ShopGridLeftPage from './pages/ShopGridLeftPage';
import ShopCheckOutPage from './pages/ShopCheckOutPage';
import ShopProductFullPage from './pages/ShopProductFullPage';

function App() {
  return (
    <div>
      <NavbarPage />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/wide' element={<ShopWidePage />} />
        <Route path='/cart' element={<ShopCartPage />} />
        <Route path='/compare' element={<ShopComparePage />} />
        <Route path='/filter' element={<ShopFilterPage />} />
        <Route path='/grid-right' element={<ShopGridRightPage />} />
        <Route path='/invoice' element={<ShopInvoicePage />} />
        <Route path='/grid-left' element={<ShopGridLeftPage />} />
        <Route path='/check-out' element={<ShopCheckOutPage />} />
        <Route path='/product-full' element={<ShopProductFullPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
