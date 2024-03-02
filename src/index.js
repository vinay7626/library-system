import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import BookDetails from './components/BookDetails';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} index/>
    <Route path='/search' element={<Search />}/>
    <Route path='/contactus' element={<ContactUs />}/>
    <Route path='/book/:id' element={<BookDetails />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);