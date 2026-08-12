import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center bg-[#fffcfc] border border-red-50 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto shadow-sm my-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
        Subscribe & Get 20% Off
      </h2>

      <p className="text-sm text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
        Join the H MART Philippines community and be the first to know about new products, Korean favorites and exclusive offers.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
      >
        <input
          className="w-full sm:flex-1 px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all text-sm text-gray-700 bg-white placeholder-gray-400"
          type="email"
          placeholder="Enter your email address"
          required
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider px-8 py-3.5 rounded-xl transition-colors shadow-sm whitespace-nowrap"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
