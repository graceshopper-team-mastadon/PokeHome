import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/BrowseProducts/AllProducts";
import CategoryView from "./components/BrowseProducts/CategoryView";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <div>
        <nav>{<NavBar />}</nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products/:id" element={<CategoryView />} />
      </Routes>
    </>
  );
};

export default App;
