import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import ProducItem from "./ProducItem";

const FreshPicks = () => {
  const { products } = useContext(ShopContext);
  const [freshProducts, setFreshProducts] = useState([]);

  useEffect(() => {
    const produce = products.filter(item => item.category === 'Fresh Produce');
    setFreshProducts(produce.slice(0, 4));
  }, [products]);

  return (
    <div className="mb-16 bg-green-50/50 p-6 lg:p-10 rounded-3xl border border-green-100">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-green-900 mb-2 tracking-tight">Fresh Picks</h2>
          <p className="text-sm text-green-700">Fresh ingredients for your everyday meals.</p>
        </div>
        <Link to="/collection" className="text-sm font-bold text-green-700 hover:text-green-800 hover:underline flex items-center gap-1 bg-white px-4 py-2 rounded-full shadow-sm border border-green-100">
          Shop Produce <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {freshProducts.map((item, index) => {
          // Make the first item featured (larger) on desktop
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

export default FreshPicks;
