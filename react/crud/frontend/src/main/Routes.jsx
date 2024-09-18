import React from "react";
import { Routes, Route } from "react-router-dom";
import UserCrud from "../components/user/UserCrud";
import Home from "../components/home/Home";



export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" Component={() => <UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>