import React from 'react';
import AdminTemplete from './Components/AdminTemplete/AdminTemplete';
import { Route, Routes } from 'react-router';
import Arizalar from './Components/Pages/Arizalar';
import Yetkazilgan from './Components/Pages/Yetkazilgan';
import Qoshish from './Components/Pages/Qoshish';
import Foydalanuvchilar from './Components/Pages/Foydalanuvchilar';



function App(props) {
  return (
    <Routes >
    <Route path='/' element={<Arizalar />}></Route>
    <Route path='/yetkazilgan' element={<Yetkazilgan/>}></Route>
    <Route path='/qoshish/*' element={<Qoshish/>}></Route>
    <Route path='/foydalanuvchilar' element={<Foydalanuvchilar/>}></Route>
  </Routes>
  );
}

export default App;