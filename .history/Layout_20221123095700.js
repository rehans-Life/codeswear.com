import React, { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { setCart } from "./redux/cart";
import { setUser } from "./redux/user";
import LoadingBar from "react-top-loading-bar";

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
  return (
    <div className="relative">
      <div>
        <LoadingBar color="#f11946" ref={ref} />
        <button onClick={() => ref.current.continuousStart()}>
          Start Continuous Loading Bar
        </button>
        <button onClick={() => ref.current.staticStart()}>
          Start Static Loading Bar
        </button>
        <button onClick={() => ref.current.complete()}>Complete</button>
        <br />
      </div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
