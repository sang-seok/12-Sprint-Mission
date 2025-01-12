import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/page/Home';
import ProductListPage from './components/page/ProductListPage';
import ProductRegPage from './components/page/ProductRegPage';
import ProductDetailPage from './components/page/ProductDetailPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ProductListPage />} />
        <Route path='/additem' element={<ProductRegPage />} />
        <Route path='/items/:productId' element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
