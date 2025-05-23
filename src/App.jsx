import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pagina principal
import Home from './components/pages/Home/Home.jsx';

//login
import Login from './components/pages/income/login/Login.jsx';

//register
import Register from './components/pages/income/register/Register.jsx';

//tienda de productos
import Shop from './components/pages/shop/Shop.jsx';

//carrito con localstorage para que se guarde lo elegido
import CartHeader from './components/pages/cart/cartHeader/CartHeader.jsx';

//para mandar un email
import ContactForm  from './components/pages/contact/ContactForm.jsx';

//esto es para mandar el mensaje
import FinishCart from './components/pages/cart/finishCart/FinishCart.jsx'

//la lista de tareas
import TodoList from './components/pages/todoList/TodoList.jsx'

//crud
import ProductList from './components/pages/addProducts/addProductsList.jsx'

//css
import './App.css'



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
            <Route path="/list" element={<TodoList />} />
             <Route path="/addProducts" element={<ProductList />} />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;