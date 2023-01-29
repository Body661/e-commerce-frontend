import HomePage from "./Page/Home/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import LoginPage from './Page/Auth/LoginPage';
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethodPage from "./Page/Checkout/ChoosePayMethodPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddressPage from './Page/User/UserAllAddressPage';
import UserAddAddressPage from './Page/User/UserAddAddressPage';
import UserEditAddressPage from './Page/User/UserEditAddressPage';
import UserProfilePage from "./Page/User/UserProfilePage";

function App() {
    return (
        <div className="font">
            <NavBarLogin/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/allCategory" element={<AllCategoryPage/>}/>
                    <Route path="/allBrands" element={<AllBrandPage/>}/>
                    <Route path="/products" element={<ShopProductsPage/>}/>
                    <Route path="/products/:id" element={<ProductDetailsPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/order/payMethod" element={<ChoosePayMethodPage/>}/>
                    <Route path="/admin/allProducts" element={<AdminAllProductsPage/>}/>
                    <Route path="/admin/allOrders" element={<AdminAllOrdersPage/>}/>
                    <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage/>}/>
                    <Route path="/admin/addBrand" element={<AdminAddBrandPage/>}/>
                    <Route path="/admin/addCategory" element={<AdminAddCategoryPage/>}/>
                    <Route path="/admin/addSubcategory" element={<AdminAddSubCategoryPage/>}/>
                    <Route path="/admin/addProduct" element={<AdminAddProductsPage/>}/>
                    <Route path="/user/allOrders" element={<UserAllOrdersPage/>}/>
                    <Route path="/user/favoriteProducts" element={<UserFavoriteProductsPage/>}/>
                    <Route path="/user/addresses" element={<UserAllAddressPage/>}/>
                    <Route path="/user/add-address" element={<UserAddAddressPage/>}/>
                    <Route path="/user/edit-address" element={<UserEditAddressPage/>}/>
                    <Route path="/user/profile" element={<UserProfilePage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
