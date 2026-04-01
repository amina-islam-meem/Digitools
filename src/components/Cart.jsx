const Cart = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) 
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-12 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Add some products to get started!</p>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Cart</h3>
      
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
            </div>
            <button 
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-pink-600 text-sm font-medium transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">Total</span>
          <span className="text-2xl font-bold text-gray-900">${total}</span>
        </div>
        <button 
          onClick={onCheckout}
          className="w-full py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;