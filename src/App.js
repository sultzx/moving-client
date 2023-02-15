import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Main, Contact, News, Login, Registration, Profile, CreateOrder, UpdateOrder, Orders } from './pages/index.js'

function App() {
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
