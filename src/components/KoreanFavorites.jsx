import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import ProducItem from "./ProducItem";

const KoreanFavorites = () => {
  const { products } = useContext(ShopContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Filter bestsellers, excluding K-Beauty to keep it grocery focused
    const bestProducts = products.filter(item => item.bestseller && item.category !== 'K-Beauty');
    setFavorites(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="mb-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 tracking-tight">Korean Favorites</h2>
          <p className="text-sm text-gray-500">Popular picks loved by our customers.</p>
        </div>
        <Link to="/collection" className="text-sm font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1">
          View all <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {favorites.map((item, index) => (
          <ProducItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default KoreanFavorites;
