import React from 'react';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/MainPage';
import LoanPage from './pages/LoanPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/loan" element={<LoanPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
