import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { setCart } from "./redux/cart";
import { setUser } from "./redux/user";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(setCart(JSON.parse(localStorage.getItem("cart"))));
    } catch (error) {
      localStorage.clear();
    }
    if (localStorage.getItem("token")) {
      dispatch(setUser(localStorage.getItem("token")));
    }
  }, [dispatch]);
  useEffect((=>{},[]))
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
