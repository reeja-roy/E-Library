import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Profile from "./pages/Profile";

import Navbar from "./Components/Navbar";
import PaymentHistory from "./pages/PaymentHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/payment-history" element={<PaymentHistory/>} />
      </Routes>
    </div>
  );
}

export default App;
