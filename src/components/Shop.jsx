import React, { useState } from 'react';
import { shopData } from '../data/data';
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../app/CartSlice';
import Cart from '../components/Cart';
import ReactGA from 'react-ga4'; // ✅ Import ReactGA

const Shop = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const products = [...shopData.sports, ...shopData.sneakers];

  const filteredProducts = products.filter((product) => {
    const isTypeMatch =
      selectedType === 'All' || product.category.toLowerCase() === selectedType.toLowerCase();

    const isSearchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    return isTypeMatch && isSearchMatch;
  });

  const onAddToCart = (product) => {
    dispatch(setAddItemToCart(product));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  // ✅ Track Search in Google Analytics
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    // ✅ Track search event in Google Analytics
    ReactGA.event({
      category: 'Search',
      action: 'Performed Search',
      label: e.target.value,
    });
  };

  return (
    <>
      <Cart />
      <div className="container mx-auto px-4">
        {/* ✅ Title */}
        <h2 className="text-2xl font-bold text-center mb-6 capitalize">
          {selectedType === 'All' ? 'All Products' : selectedType}
        </h2>

        {/* ✅ Filter Section */}
        <div className="flex justify-center gap-4 mb-6">
          {['All', 'Sports', 'Sneakers'].map((type) => (
            <button
              key={type}
              className={`py-2 px-6 rounded-md border ${
                selectedType === type
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-300 transition'
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}

          {/* ✅ More Button */}
          <button
            className="py-2 px-6 rounded-md border bg-gray-100 text-black hover:bg-gray-300 transition"
            onClick={() => alert('Visit store to see more Articles')}
          >
            More
          </button>
        </div>

        {/* ✅ Search Box */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="🔍 Search shoes..."
            value={searchQuery}
            onChange={handleSearch}
            className="border px-4 py-2 w-full max-w-md rounded-md focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* ✅ Product Section */}
        {filteredProducts.length > 0 ? (
          <div className="grid items-center justify-items-center gap-4 lg:gap-4 mt-7 grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`relative w-full max-w-[280px] min-h-[400px] rounded-xl shadow-lg overflow-hidden p-5 flex flex-col 
                  ${
                    index % 4 === 0
                      ? 'bg-gradient-to-r from-blue-500 to-blue-400'
                      : index % 4 === 1
                      ? 'bg-gradient-to-r from-green-500 to-green-400'
                      : index % 4 === 2
                      ? 'bg-gradient-to-r from-red-500 to-red-400'
                      : 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                  } 
                  hover:shadow-xl transition-transform transform hover:-translate-y-2`}
              >
                {/* ✅ Shoe Image */}
                <div className="relative w-full h-44 flex justify-center items-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="object-contain h-full w-full transition-transform transform hover:scale-105"
                  />
                </div>

                {/* ✅ Product Details */}
                <div className="flex flex-col gap-2 mt-3 flex-grow">
                  <h3 className="text-white text-lg font-bold">{product.title}</h3>
                  <p className="text-gray-200 text-sm">{product.category}</p>

                  {/* ✅ Price and Rating */}
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium bg-black px-2 py-1 rounded-md">
                      ₹{Number(product.price).toFixed(2)}
                    </span>
                    <span className="text-white text-sm">⭐ {product.rating}</span>
                  </div>

                  {/* ✅ Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      className="py-2 px-4 bg-white text-black rounded-md hover:bg-gray-100 transition flex items-center gap-2"
                      onClick={() => onAddToCart(product)}
                    >
                      🛒 Add to Cart
                    </button>
                    <button
                      className="py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition"
                      onClick={() => {
                        onAddToCart(product);
                        onCartToggle();
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">No products available</p>
        )}
      </div>
    </>
  );
};

export default Shop;
