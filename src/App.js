
import React from "react";
import "./App.scss";
import DashBoard from "./components/DashBoard/DashBoard";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <SideBar />
            <Header />
            <div className="w-100 main-container">
                <DashBoard />
            </div>
        </div>
    );
}

export default App;

