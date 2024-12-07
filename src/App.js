import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/page/Home';
import ProductListPage from './components/page/ProductListPage';
import ProductRegPage from './components/page/ProductRegPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ProductListPage />} />
        <Route path='/additem' element={<ProductRegPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
