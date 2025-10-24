import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Compass, Phone } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marketData from '@/data/markets.json';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from '@/components/ui/alert-dialog';

const createCustomIcon = (index) => {
  return L.divIcon({
    html: `<div class="relative flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full shadow-lg border-2 border-white">${index + 1}</div>`,
    className: ''
  });
};

const MarketStats = () => {
  const stats = {
    markets: marketData.length,
    shops: marketData.reduce((acc, market) => acc + market.shops, 0),
    states: new Set(marketData.map(m => m.city.split(', ')[1])).size,
    heritage: new Date().getFullYear() - Math.min(...marketData.map(m => m.established))
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-gray-800">Market Statistics</h2>
          <p className="mt-3 text-lg text-gray-600">Discover the rich heritage of Indian traditional markets</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-4xl font-bold text-teal-600">{stats.markets}+</h3>
            <p className="mt-2 text-md text-gray-600">Traditional Markets</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-4xl font-bold text-teal-600">{stats.shops.toLocaleString()}+</h3>
            <p className="mt-2 text-md text-gray-600">Total Shops</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-4xl font-bold text-teal-600">{stats.states}</h3>
            <p className="mt-2 text-md text-gray-600">States Covered</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-4xl font-bold text-teal-600">{stats.heritage}+</h3>
            <p className="mt-2 text-md text-gray-600">Years of Heritage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapUpdater = ({ center, selectedMarket }) => {
    const map = useMap();
    useEffect(() => {
      if (center) {
        if (selectedMarket) {
          map.flyTo(center, 14, { animate: true, duration: 1.5 });
        } else {
            map.flyTo([22.5937, 78.9629], 5, { animate: true, duration: 1.5 });
        }
      }
    }, [center, selectedMarket, map]);
    return null;
};


const MarketplaceLocator = () => {
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [activeMarketId, setActiveMarketId] = useState(null);
  const [mapCenter, setMapCenter] = useState([22.5937, 78.9629]);
  const [isContactOpen, setContactOpen] = useState(false);
  const detailRef = useRef(null);


  const traditionalMarkets = useMemo(() => 
    marketData.filter(m => m.type === 'Traditional'), 
  []);

  const handleMarketSelect = (market) => {
    if (selectedMarket && selectedMarket.id === market.id) {
        setSelectedMarket(null);
        setActiveMarketId(null);
    } else {
        setSelectedMarket(market);
        setActiveMarketId(market.id);
        setMapCenter(market.coordinates);
    }
  };
  
  useEffect(() => {
    if (selectedMarket && detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedMarket]);

  return (
    <>
      <Helmet>
        <title>Marketplace Locator | Pehenava</title>
        <meta name="description" content="Explore and locate traditional ethnic wear markets across India with our interactive map." />
        <style type="text/css">{
          `.leaflet-container {
              z-index: 0 !important;
          }`
        }</style>
      </Helmet>

      <div className="pt-24 bg-gray-50 min-h-screen">
        <div className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <div className="lg:col-span-4 h-[calc(100vh-12rem)]">
              <div className="bg-white p-6 rounded-xl shadow-lg h-full overflow-y-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Traditional Markets ({traditionalMarkets.length})</h2>
                <div className="space-y-4">
                  {traditionalMarkets.map((market, index) => (
                    <motion.div
                      key={market.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleMarketSelect(market)}
                      className={`p-5 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeMarketId === market.id ? 'bg-teal-50 border-2 border-teal-500 shadow-md' : 'bg-white border'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{market.name}</h3>
                          <p className="text-sm text-gray-600">{market.city}</p>
                          <p className="text-xs text-gray-500 mt-1">Est. {market.established} • {market.shops}+ shops</p>
                        </div>
                        <span className={`flex-shrink-0 ml-4 font-bold text-sm ${activeMarketId === market.id ? 'text-teal-600' : 'text-gray-400'}`}>
                          #{index + 1}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {market.specialties.slice(0, 2).map(spec => (
                          <span key={spec} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{spec}</span>
                        ))}
                        {market.specialties.length > 2 && (
                           <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">+ {market.specialties.length - 2} more</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 0 }} className="lg:col-span-8 h-[calc(100vh-12rem)]">
              <div className="bg-white rounded-xl shadow-lg w-full h-full overflow-hidden">
                 <MapContainer center={mapCenter} zoom={5} className="h-full w-full" scrollWheelZoom={false}>
                    <MapUpdater center={mapCenter} selectedMarket={selectedMarket}/>
                    <TileLayer
                      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                    {traditionalMarkets.map((market, index) => (
                      <Marker key={market.id} position={market.coordinates} icon={createCustomIcon(index)} eventHandlers={{
                          click: () => handleMarketSelect(market),
                      }}/>
                    ))}
                  </MapContainer>
              </div>
            </div>
          </div>
        </div>

        <div ref={detailRef} className="transition-all duration-500">
            {selectedMarket && 
                <div className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
                     <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                      >
                        <h2 className="text-3xl font-bold font-playfair text-gray-900">{selectedMarket.name}</h2>
                          <p className="text-md text-gray-600 mt-1">{selectedMarket.city}</p>
                          <p className="text-gray-700 mt-4">{selectedMarket.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-8">
                            <div>
                               <p className="text-2xl font-bold text-teal-600">{selectedMarket.established}</p>
                               <p className="text-sm text-gray-500">Established</p>
                            </div>
                            <div>
                               <p className="text-2xl font-bold text-teal-600">{selectedMarket.shops.toLocaleString()}+</p>
                               <p className="text-sm text-gray-500">Shops</p>
                            </div>
                            <div>
                               <p className="text-2xl font-bold text-teal-600">{selectedMarket.specialties.length}</p>
                               <p className="text-sm text-gray-500">Specialties</p>
                            </div>
                          </div>

                          <div>
                             <h3 className="font-bold text-lg text-gray-800 mb-3">Specialties</h3>
                             <div className="flex flex-wrap gap-3">
                                {selectedMarket.specialties.map(spec => (
                                  <span key={spec} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">{spec}</span>
                                ))}
                             </div>
                          </div>

                          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${selectedMarket.coordinates[0]},${selectedMarket.coordinates[1]}`} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700">
                               <Compass className="-ml-1 mr-3 h-5 w-5" />
                               Get Directions
                            </a>
                            <button onClick={() => setContactOpen(true)} className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
                               <Phone className="-ml-1 mr-3 h-5 w-5" />
                               Contact Info
                            </button>
                          </div>
                     </motion.div>
                </div>
            }
        </div>
        <MarketStats />
        {selectedMarket && (
            <AlertDialog open={isContactOpen} onOpenChange={setContactOpen}>
                <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-black">Contact Information for {selectedMarket.name}</AlertDialogTitle>
                        <AlertDialogDescription className="text-black">
                            <p><strong>Address:</strong> {selectedMarket.city}</p>
                            <p><strong>Established:</strong> {selectedMarket.established}</p>
                            <p><strong>Total Shops:</strong> {selectedMarket.shops}</p>
                            <br />
                            <p>For more details, please visit the market directly.</p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setContactOpen(false)}>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )}

      </div>
    </>
  );
};

export default MarketplaceLocator;
