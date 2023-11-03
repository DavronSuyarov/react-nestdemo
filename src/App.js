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
import ShopProductLeftPage from './pages/ShopProductLeftPage';
import ShopProductRightPage from './pages/ShopProductRightPage';
import ShopProductVendorPage from './pages/ShopProductVendorPage';
import VendorListPage from './pages/VendorListPage';
import VendorDashboardPage from './pages/VendorDashboardPage';
import VendorDetailsPage from './pages/VendorDetailsPage';
import VendorGridPage from './pages/VendorGridPage';
import VendorGuidePage from './pages/VendorGuidePage';
import NotFoundPage from './pages/NotFoundPage';
import ShopListRightPage from './pages/ShopListRightPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ContactPage from './pages/ContactPage';
import PurchaseGuidePage from './pages/PurchaseGuidePage';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';
import ShopWishListPage from './pages/ShopWishListPage';

function App() {
  return (
    <div>
      <NavbarPage />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/wide' element={<ShopWidePage />} />
        <Route path='/wish-list' element={<ShopWishListPage />} />
        <Route path='/cart' element={<ShopCartPage />} />
        <Route path='/compare' element={<ShopComparePage />} />
        <Route path='/filter' element={<ShopFilterPage />} />
        <Route path='/grid-right' element={<ShopGridRightPage />} />
        <Route path='/grid-left' element={<ShopGridLeftPage />} />
        <Route path='/invoice' element={<ShopInvoicePage />} />
        <Route path='/check-out' element={<ShopCheckOutPage />} />
        <Route path='/list-right' element={<ShopListRightPage />} />
        <Route path='/product-full' element={<ShopProductFullPage />} />
        <Route path='/product-left' element={<ShopProductLeftPage />} />
        <Route path='/product-right' element={<ShopProductRightPage />} />
        <Route path='/product-vendor' element={<ShopProductVendorPage />} />
        <Route path='/vendor-list' element={<VendorListPage />} />
        <Route path='/vendor-dashboard' element={<VendorDashboardPage />} />
        <Route path='/vendor-details' element={<VendorDetailsPage />} />
        <Route path='/vendor-guide' element={<VendorGuidePage />} />
        <Route path='/vendor-grid' element={<VendorGridPage />} />
        <Route path='/error' element={<NotFoundPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/policy' element={<PrivacyPolicyPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/purchase-guide' element={<PurchaseGuidePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
