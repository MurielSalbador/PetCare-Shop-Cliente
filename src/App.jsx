import './App.css'
import Home from './components/pages/Home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/pages/shop/Shop.jsx';
import CartHeader from './components/pages/cart/CartHeader.jsx';
import ContactForm  from './components/pages/contact/ContactForm.jsx';
import FinishCart from './components/pages/cart/FinishCart.jsx'
import OrderHistory from './components/pages/cart/OrderHistory.jsx'

//esto es de la lista de tareas
import TodoList from './components/pages/todoList/TodoList.jsx'

import ProductList from './components/pages/addProducts/addProductsList.jsx'

function App () {



  return (
     <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/cart" element={<CartHeader />} />
            <Route path="/finish" element={<FinishCart />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/list" element={<TodoList />} />
             <Route path="/addProducts" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;