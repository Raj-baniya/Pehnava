import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import initialMarkets from '../data/markets.json';

const ShopDetail = () => {
  const { shopId } = useParams();
  const shop = initialMarkets.flatMap(market => market.shops).find(s => s.id === parseInt(shopId));

  if (!shop) {
    return <div className="pt-20 text-center text-red-500">Shop not found!</div>;
  }

  // Dummy data for products
  const products = [
    { name: 'Royal Kurta Set', price: '₹2,999' },
    { name: 'Silk Sherwani', price: '₹6,499' },
    { name: 'Casual Cotton Kurta', price: '₹1,299' },
    { name: 'Embroidered Lehenga', price: '₹8,999' },
    { name: 'Kids Ethnic Wear', price: '₹1,499' },
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-red-50 to-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-5xl font-bold font-playfair text-red-900">{shop.name}</h1>
          <span className="text-md font-semibold text-white bg-gradient-to-r from-amber-400 to-rose-400 px-4 py-2 rounded-full whitespace-nowrap">{shop.category}</span>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          {shop.description} With a rich history of providing the finest traditional wear, our shop is renowned for its commitment to quality and craftsmanship. We specialize in bespoke outfits for weddings and other special occasions, ensuring every customer feels like royalty.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold font-playfair text-red-900 border-b-2 border-amber-500/30 pb-3 mb-4">Our Products</h2>
          <ul className="space-y-3">
            {products.map((product, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-white to-amber-50/50 rounded-md">
                <span className="text-lg text-gray-800">{product.name}</span>
                <span className="text-lg font-semibold text-red-900">{product.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
            <h2 className="text-3xl font-semibold font-playfair text-red-900 border-b-2 border-amber-500/30 pb-3 mb-4">Contact Us</h2>
            <div className="text-lg space-y-2 text-gray-700">
                <p><strong>Location:</strong> {shop.location || 'Delhi, India'}</p>
                <p><strong>Phone/WhatsApp:</strong> {shop.contact || '+91-9876543210'}</p>
                <p><strong>Instagram:</strong> @{shop.name.toLowerCase().replace(/\s+/g, '')}</p>
            </div>
        </div>

        <div className="text-center">
          <Link to="/marketplace-locator">
            <Button className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-8 py-3 text-lg rounded-md shadow-lg">Back to Market</Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ShopDetail;
