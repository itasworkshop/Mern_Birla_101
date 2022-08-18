import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route exact path="/blogdetail/:blogid" element={<BlogDetail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;