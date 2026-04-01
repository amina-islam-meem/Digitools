const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
        <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button className="px-8 py-3 bg-white text-violet-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Explore Products
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
            View Pricing
          </button>
        </div>
        
        <p className="text-violet-200 text-sm">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};
export default CTA;