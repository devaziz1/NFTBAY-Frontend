import "./index.css";
import { Route, Routes, Navigate } from "react-router-dom";

import LandingPage from "./Screens/LandingPage/LandingPage";
import Search from "./Screens/Search/Search";
import Dummy from "./Screens/Search/dummy";

import Profile from "./Screens/Profile/Profile";
import SignUp from "./Screens/SignUp/SignUp";
import Login from "./Screens/Login/Login";
import User from "./Screens/User/User";
import Seller from "./Screens/Seller/Seller";
import SellerPanel from "./Screens/SellerPanel/SellerPanel";
import Subscription from "./Screens/Subscription/Subscription";
import Payment from "./Screens/Payment/Payment";
import Contact from "./Screens/ContactUs/Contact";
import Order from "./Screens/Orders/Order";
import SellerProfile from "./Screens/SellerProfile/SellerProfile";
import MyOrder from "./Screens/MyOrders/MyOrders";
import AdminLogin from "./Screens/Admin/login/AdminLogin";
import APanel from "./Screens/Admin/login/APanel";
import DashBoard from "./Screens/Admin/login/DashBoard";
import Users from "./Screens/Admin/login/Users";
import Subscriptions from "./Screens/Admin/login/Subscriptions";
import PurchaseHistory from "./Screens/Admin/login/PurchaseHistory";
import Settings from "./Screens/Admin/login/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/LandingPage" />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/SPanel" element={<SellerPanel />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/SellerProfile" element={<SellerProfile />} />
        <Route path="/MyOrders" element={<MyOrder />} />
        <Route path="/Admin" element={<AdminLogin />} />
        <Route path="/APanel/" element={<APanel />}>
          <Route path="DashBoard" element={<DashBoard />} />
          <Route path="Users" element={<Users/>} />
          <Route path="Subscriptions" element={<Subscriptions />} />
          <Route path="History" element={<PurchaseHistory/>} />
          <Route path="Settings" element={<Settings/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
