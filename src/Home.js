import React from "react";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import Initial from "./Initial";
import Error from "./Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Home.css'

function Home () {
    return(
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/app">useContext</Link>
            <Link to="/app2">useEffect</Link>
            <Link to="/app3">useReducer</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Initial/>}/>
            <Route path="/app" element={<App/>}/>
            <Route path="/app2" element={<App2/>}/>
            <Route path="/app3" element={<App3/>}/>+
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    )
    
}

export default Home;