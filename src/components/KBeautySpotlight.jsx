import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import ProducItem from "./ProducItem";

const KBeautySpotlight = () => {
  const { products } = useContext(ShopContext);
  const [beautyProducts, setBeautyProducts] = useState([]);

  useEffect(() => {
    const beauty = products.filter(item => item.category === 'K-Beauty');
    setBeautyProducts(beauty.slice(0, 4));
  }, [products]);

  return (
    <div className="mb-16 bg-[#fdf5f6] p-6 lg:p-10 rounded-3xl border border-pink-100/50">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-pink-900 mb-2 tracking-tight">K-Beauty Spotlight</h2>
          <p className="text-sm text-pink-700">Discover Korean skincare and beauty essentials.</p>
        </div>
        <Link to="/collection" className="text-sm font-bold text-pink-700 hover:text-pink-800 hover:underline flex items-center gap-1 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100">
          Explore K-Beauty <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {beautyProducts.map((item, index) => {
          const isFeatured = index === 0;
          return (
            <div key={index} className={isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}>
               <ProducItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
               />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KBeautySpotlight;
