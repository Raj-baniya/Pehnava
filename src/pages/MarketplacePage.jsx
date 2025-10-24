import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/contexts/CartContext';
import allProducts from '@/data/products.json';

const OccasionFilter = ({ gender, onFilterChange }) => {
  const occasions = {
    women: ['Wedding', 'Festive', 'Party', 'Casual'],
    men: ['Wedding', 'Festive', 'Ceremony', 'Casual'],
    kids: ['Wedding', 'Festive', 'Birthday', 'Casual'],
  };

  const [selectedOccasion, setSelectedOccasion] = useState('All');

  const handleSelect = (occasion) => {
    setSelectedOccasion(occasion);
    onFilterChange(occasion);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button
        onClick={() => handleSelect('All')}
        variant={selectedOccasion === 'All' ? "default" : "outline"}
        className={selectedOccasion === 'All' ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white" : "border-amber-600 text-amber-700 hover:bg-amber-50"}
      >
        All
      </Button>
      {(occasions[gender] || []).map(occasion => (
        <Button
          key={occasion}
          onClick={() => handleSelect(occasion)}
          variant={selectedOccasion === occasion ? "default" : "outline"}
          className={selectedOccasion === occasion ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white" : "border-amber-600 text-amber-700 hover:bg-amber-50"}
        >
          {occasion}
        </Button>
      ))}
    </div>
  );
};

const MarketplacePage = () => {
  const location = useLocation();
  const [gender, setGender] = useState('women');
  const [occasion, setOccasion] = useState('All');
  const { toast } = useToast();
  const { addToCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const genderParam = params.get('gender') || 'women';
    setGender(genderParam);
  }, [location.search]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const getGenderSpecificProductIds = (gender) => {
    if (gender === 'men') {
      // Assumed product IDs for men
      return [102, 104, 108, 109, 112];
    }
    if (gender === 'women') {
      // Assumed all other products are for women
      const menIds = [102, 104, 108, 109, 112];
      return allProducts.map(p => p.id).filter(id => !menIds.includes(id));
    }
    // No products for kids in the current data
    if (gender === 'kids') return [];
    return [];
  };

  const genderProductIds = getGenderSpecificProductIds(gender);

  const filteredProducts = allProducts.filter(product => {
    const matchesGender = genderProductIds.includes(product.id);

    const occasionMapping = {
      'Wedding': ['Wedding Wear', 'Bridal Wear'],
      'Festive': ['Festive Wear'],
      'Party': ['Party Wear'],
      'Casual': ['Casual Wear'],
      'Ceremony': ['Traditional Wear', 'Formal Wear', 'Contemporary Wear']
    };
    
    const matchesOccasion = occasion === 'All' || (occasionMapping[occasion] && occasionMapping[occasion].includes(product.category));
    
    return matchesGender && matchesOccasion;
  });

  return (
    <>
      <Helmet>
        <title>Marketplace - {gender.charAt(0).toUpperCase() + gender.slice(1)}'s Collection | Pehenava</title>
        <meta name="description" content={`Discover premium ethnic wear for ${gender}. Shop for all occasions at Pehenava marketplace.`} />
      </Helmet>

      <div className="pt-24 min-h-screen">
        <section className="bg-gradient-to-r from-amber-50 to-rose-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-6">
                {gender.charAt(0).toUpperCase() + gender.slice(1)}'s Collection
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exquisite ethnic wear for every occasion.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-white/50 sticky top-24 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <OccasionFilter gender={gender} onFilterChange={setOccasion} />
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="royal-card rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-amber-100 to-rose-100">
                    <img 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={product.image} />
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white text-gray-700 rounded-full p-2" onClick={(e) => { e.stopPropagation(); toast({ title: 'Coming Soon!' }) }}>
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white text-gray-700 rounded-full p-2" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold font-playfair text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-600">₹{product.price}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.9</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No products found for this selection.</p>
                 <p className="text-md text-gray-400">I've populated the store with a variety of kurtas, but the current product data doesn't include items for kids. I can add them if you provide the details!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketplacePage;
