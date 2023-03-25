import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/srore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs";
import Error from "./pages/error";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
