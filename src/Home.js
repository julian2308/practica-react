import React from "react";
import ContextEj from "./components/ContextEx";
import EffectEx from "./components/EffectEx";
import ReducerEx from "./components/ReducerEx";
import Initial from "./components/Initial";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles/Home.css'

function Home () {
    return(
    <Router>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/ContextEj">useContext</Link>
            <Link to="/EffectEx">useEffect</Link>
            <Link to="/ReducerEx">useReducer</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Initial/>}/>
            <Route path="/ContextEj" element={<ContextEj/>}/>
            <Route path="/EffectEx" element={<EffectEx/>}/>
            <Route path="/ReducerEx" element={<ReducerEx/>}/>+
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    )
    
}

export default Home;