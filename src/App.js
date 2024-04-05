
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './Pages/Shop';
import ItemCategory from './Pages/ItemCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_ladies.png'
import kids_banner from './components/Assets/banner_kids.png'
function App() {
  return (
    < >
    <BrowserRouter>
   
     <Navbar/>
     <div>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens'element={<ItemCategory banner={men_banner} category="men"/>}/>
        <Route path='/women'element={<ItemCategory banner={women_banner} category="women"/>}/>
        <Route path='/Kids'element={<ItemCategory banner={kids_banner} category="kid"/>}/>
        {/* <Route path='/product' element={<Product/>}/> */}
        <Route path='/product/:productId' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
     </div>
 
     </BrowserRouter>
    
     
    </>
  );
}

export default App;
