import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderBreadCrumb from "./components/HeaderBreadCrumb/HeaderBreadCrumb";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Register from "./components/Register/Register";
import VideoMeslehetci from "./components/VideoMeslehetci/VideoMeslehetci";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showMain, setShowMain] = useState(true);

  const handleLogin = () => {
    setShowLogin(true);
    setShowMain(false);
    setShowRegister(false);
  };
  const handleRegister = () => {
    setShowLogin(false);
    setShowMain(false);
    setShowRegister(true);
  };
  const handleMain =()=>{
    setShowLogin(false);
    setShowMain(true);
    setShowRegister(false);
  }
  return (
    <div className="App">
      <Header handleLogin={handleLogin} handleMain={handleMain} />
      <HeaderBreadCrumb showMain={showMain} showLogin={showLogin} showRegister={showRegister} />
      {showLogin && <Login handleRegister={handleRegister} />}
      {showRegister && <Register handleLogin={handleLogin}/>}
      {showMain && <Main />}
      <Footer />
      <VideoMeslehetci />
    </div>
  );
}
export default App;
