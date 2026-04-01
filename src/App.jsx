import { useState } from 'react';
import productsData from './data/products.json';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // State to store items added to the cart
  const [cart, setCart] = useState([]);
  
  // State to handle toggling between 'products' and 'cart' views
  const [activeTab, setActiveTab] = useState('products');

  // Function to add a product to the cart
  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);
    
    if (!isAlreadyInCart) {
      setCart([...cart, product]);
      toast.success(` ${product.name} added to cart!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    } else {
      toast.info('Item is already in your cart!', {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  // Function to remove a specific item from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    toast.error('Item removed from cart', {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  // Function to handle "Proceed to Checkout" (Clears cart)
  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCart([]);
    setActiveTab('products');
    toast.success(' Purchase successful! Thank you.', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation Bar - Receives cart count for the icon */}
      <Navbar cartCount={cart.length} />

      {/* Hero Sections */}
      <Banner />
      <Stats />
      
      {/* Main Content: Products & Cart Toggle */}
      <main className="py-16 px-4 max-w-7xl mx-auto" id="shop-section">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Premium Digital Tools</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Choose from our curated collection of premium digital products designed to boost your productivity.
          </p>
          
          {/* THE TOGGLE BUTTONS (Matching Figma) */}
          <div className="flex justify-center gap-2 bg-gray-100 p-1.5 rounded-full inline-flex border border-gray-200 shadow-inner">
            <button 
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'products' 
                ? 'bg-violet-600 text-white shadow-lg' 
                : 'text-gray-500 hover:text-gray-800'
              }`} 
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button 
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'cart' 
                ? 'bg-violet-600 text-white shadow-lg' 
                : 'text-gray-500 hover:text-gray-800'
              }`} 
              onClick={() => setActiveTab('cart')}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* CONDITIONAL RENDERING: Shows Product List or Cart */}
        {activeTab === 'products' ? (
          <ProductList products={productsData} onAdd={addToCart} />
        ) : (
          <Cart 
            cart={cart} 
            onRemove={removeFromCart} 
            onCheckout={handleCheckout} 
          />
        )}
      </main>

      {/* Extra Sections from Figma */}
      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default App;