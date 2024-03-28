import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Support from "../components/Support";
import Search from "../components/Search";
import SearchList from "../components/SearchList";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HeavenHomes" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchList" element={<SearchList />} />
      </Routes>
    </div>
  );
};

export default Routing;
