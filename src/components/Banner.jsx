import bannerImg from '../assets/banner.png'; 

const Banner = () => {
  return (
    <section className="bg-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></span>
                New: AI-Powered Tools Available
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Supercharge Your Digital Workflow
              </h1>
              <p className="text-gray-500 text-lg max-w-lg">
                Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
              </p>
              <div className="flex gap-4 pt-2">
                <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  Explore Products
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-violet-600 hover:text-violet-600 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={bannerImg} 
                alt="Digital Workflow Banner" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;