import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const ShopsPanel = ({ market, onClose }) => {
  if (!market) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 ease-in-out" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b-2 border-amber-500/30 pb-4 mb-6">
          <div>
            <h2 className="text-4xl font-bold font-playfair text-red-900">{market.name}</h2>
            <p className="text-lg text-gray-700">{market.city}, {market.country}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-red-900 text-3xl">&times;</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(market.shops && market.shops.length > 0) ? market.shops.map(shop => (
            <div key={shop.id} className="bg-gradient-to-br from-white to-amber-50/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-playfair text-red-900 flex-grow pr-2">{shop.name}</h3>
                    <span className="text-xs font-semibold text-white bg-gradient-to-r from-amber-400 to-rose-400 px-2 py-1 rounded-full whitespace-nowrap">{shop.category}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{shop.description}</p>
                <Link to={`/shop/${shop.id}`} className="w-full mt-auto">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-md shadow-lg">Visit Shop</Button>
                </Link>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No shops have been listed for this market yet.</p>
              <p className="text-sm text-gray-400 mt-2">Check back soon or contact the market manager to get your shop listed!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopsPanel;
