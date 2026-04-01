const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: 0,
      period: "Month",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      button: "Get Started Free",
      highlighted: false
    },
    {
      name: "Pro",
      desc: "Best for professionals", 
      price: 29,
      period: "Month",
      features: ["Access to all premium tools", "Advanced analytics", "Priority support", "Unlimited projects"],
      button: "Start Pro Trial",
      highlighted: true,
      tag: "Most Popular"
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: 99, 
      period: "Month",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      button: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative rounded-2xl p-8 ${plan.highlighted ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white scale-105 shadow-2xl' : 'bg-white border border-gray-200 text-gray-900'}`}>
              {plan.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-300 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                  {plan.tag}
                </span>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-violet-200' : 'text-gray-500'}`}>{plan.desc}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-violet-200' : 'text-gray-500'}`}>/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg className={`w-4 h-4 ${plan.highlighted ? 'text-violet-300' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-violet-100' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.highlighted ? 'bg-white text-violet-600 hover:bg-gray-100' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:shadow-lg'}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;