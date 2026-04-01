const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent tracking-tight">
           DigiTools
        </div>
        
        <div className="hidden md:flex gap-8 font-medium text-[#101727]">
          <a href="#" className="hover:text-indigo-600">Products</a>
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Pricing</a>
          <a href="#" className="hover:text-indigo-600">Testimonials</a>
          <a href="#" className="hover:text-indigo-600">FAQ</a>
          

        </div>

        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer">
            <svg className="w-6 h-6 text-[#101727]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <button className="font-medium text-[#101727]">Login</button>
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;