import './App.css';
import Home from './Containers/Home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Marketplace from './Components/Marketplace/markeplace';
import Product from './Containers/ProductPage/product'
import Artist from './Containers/ArtistProfile/artistProfile';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState('',{});
  const [artist, setArtist] = useState('',{})

  return (
   <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/marketplace' element={<Marketplace setProduct = {setProduct} setArtist = {setArtist}/>}/>
          <Route path='/product/:id' element={<Product product = {product} />}/>
          <Route path='/artist' element={<Artist artist = {artist} />}/>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
