import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from './landing_page/home/HomePage';
import ServicesPage from './landing_page/services/ServicesPage';
import ExpertPage from './landing_page/talk/ExpertPage';
import SigninPage from './landing_page/signin/SigninPage';
import SignupPage from './landing_page/signup/SignupPage';
import MeetingPage from './landing_page/meeting/MeetingPage';

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/talk' element={<ExpertPage/>}/>
      <Route path='/meeting' element={<MeetingPage/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
      <Footer/>
  </BrowserRouter>
);

