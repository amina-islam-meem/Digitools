import userImg from "../assets/user.png";
import productImg from "../assets/package.png";
import startImg from "../assets/rocket.png";

const Steps = () => {
  const steps = [
    {
      num: "01",
      img: userImg,
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required."
    },
    {
      num: "02",
      img: productImg,
      title: "Choose Products",
      desc: "Browse our catalog and select tools that fit your needs."
    },
    {
      num: "03",
      img: startImg,
      title: "Start Creating",
      desc: "Download and start using your premium tools instantly."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 text-center relative
                         shadow-sm
                         hover:shadow-[0_10px_40px_rgba(124,58,237,0.2)]
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2"
            >
              {/* Number badge */}
              <span className="absolute top-4 right-4 w-8 h-8
                               bg-gradient-to-r from-violet-600 to-indigo-600
                               text-white rounded-full flex items-center
                               justify-center text-sm font-bold">
                {step.num}
              </span>

              
              <div className="w-20 h-20
                              bg-gradient-to-r from-violet-100 to-indigo-100
                              rounded-full flex items-center justify-center
                              mx-auto mb-6">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

            
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;