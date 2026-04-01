const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-white/20 text-white text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">50K+</div>
            <div className="text-violet-200 text-sm">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">200+</div>
            <div className="text-violet-200 text-sm">Premium Tools</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">4.9</div>
            <div className="text-violet-200 text-sm">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;