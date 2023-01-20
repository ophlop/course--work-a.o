import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoanPage from './pages/LoanPage';
import MainPage from './pages/MainPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <MainPage /> }></Route>
        <Route path='loan' element={ <LoanPage /> }></Route>
      </Routes>
    </div>
  );
}

export default App;