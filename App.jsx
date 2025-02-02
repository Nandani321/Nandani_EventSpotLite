import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EventDiscovery from "./EventDiscovery";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PaymentForm from "./PaymentForm";
import ChatGroup from "./ChatGroup";
import OauthCallback from "./OauthCallback";

function Layout() {
  const location = useLocation();
  const hideHeaderAndFooterRoutes = ["/login", "/register", "/payment","/oauthCallback"];
  const hideFooterRoutes = ["/chat-group", "/login", "/register", "/payment","/oauthCallback"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  const shouldHideHeaderAndFooter = hideHeaderAndFooterRoutes.includes(
    location.pathname
  );
  return (
    <div className="flex flex-col min-h-screen w-full text-black font-bold">
      {!shouldHideHeaderAndFooter && <Navbar />}

      <div className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventDiscovery />} />
          <Route
            path="/login"
            element={
              !localStorage.getItem("token") ? (
                <Login />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
          <Route
            path="/register"
            element={
              !localStorage.getItem("token") ? (
                <Register />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("token") ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/payment"
            element={
              localStorage.getItem("token") ? (
                <PaymentForm />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/chat-group"
            element={
              localStorage.getItem("token") ? (
                <ChatGroup />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route path="/oauthCallback" element={<OauthCallback/>} />
        </Routes>
      </div>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
