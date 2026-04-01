import { useState } from 'react';

const ProductCard = ({ product, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyClick = () => {
    if (isAdded) return; 
    onAdd(product);      
    setIsAdded(true);    
  };

  const tagColor = 
    product.tagType === 'bestseller' ? 'bg-orange-100 text-orange-600' :
    product.tagType === 'popular' ? 'bg-violet-100 text-violet-600' :
    'bg-emerald-100 text-emerald-600';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300 relative group">
      {/* Tag */}
      <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}>
        {product.tag}
      </span>

      {/* Icon */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {product.icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>

      {/* Price */}
      <div className="text-2xl font-bold text-gray-900 mb-4">
        ${product.price}
        <span className="text-sm text-gray-400 font-normal">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="text-sm text-gray-500 space-y-2 mb-6">
        {product.features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleBuyClick}
        disabled={isAdded}
        className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
          isAdded
            ? 'bg-green-500 text-white cursor-default'
            : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:shadow-lg hover:-translate-y-0.5'
        }`}
      >
        {isAdded ? 'Added to Cart ✓' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;