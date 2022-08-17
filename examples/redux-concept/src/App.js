import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
/*
const App = () => {
    return <div>Hello Redux</div>
}*/

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<DashboardPage />}/>
            <Route exact path="/posts" element={ <PostsPage />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App