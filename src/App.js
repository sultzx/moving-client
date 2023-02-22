import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Main, Contact, News, Login, Registration, Profile, CreateOrder, UpdateOrder, Orders, OrdersForEmp } from './pages/index.js'
import { fetchAuthMe } from "./redux/slices/auth";

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [dispatch])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/> } />
        <Route path="/" element={<Main/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create-order" element={<CreateOrder/>} />
        <Route path="/update-order" element={<UpdateOrder/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/orders-for-employee" element={<OrdersForEmp/>} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default App;
