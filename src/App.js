import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/page/Home';
import ProductReg from './components/page/ProductReg';
import ProductList from './components/page/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ProductList />} />
        <Route path='/additem' element={<ProductReg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
