import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button } from '../components/ui/button';
import initialMarkets from '../data/markets.json';
import ShopsPanel from '../components/ShopsPanel';

// The faulty icon configuration has been removed.

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
        map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
};

const CustomAccordion = ({ title, children, isOpen, onToggle }) => (
    <div className="border-b">
        <button onClick={onToggle} className="w-full flex justify-between items-center p-3 text-lg font-semibold text-maroon-800 hover:bg-cream-100/50">
            {title}
            <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isOpen && <div className="p-2 bg-white">{children}</div>}
    </div>
);

const MarketplaceLocator = () => {
  const [markets] = useState(initialMarkets || []);
  const [mapCenter, setMapCenter] = useState([22.5937, 78.9629]);
  const [mapZoom, setMapZoom] = useState(5);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [map, setMap] = useState(null);
  const markerRefs = useRef({});

  const handleMarketSelect = (market) => {
    setMapCenter(market.position);
    setMapZoom(13);
    const marker = markerRefs.current[market.id];
    if (marker) {
        setTimeout(() => marker.openPopup(), 100);
    }
  };

  const handleOpenShopsPanel = (market) => {
    if (map) {
      map.closePopup();
    }
    setSelectedMarket(market);
  };

  const handleCloseShopsPanel = () => {
    setSelectedMarket(null);
  };

  const groupedMarkets = Array.isArray(markets) ? markets.reduce((acc, market) => {
    const { country } = market;
    if (!acc[country]) acc[country] = [];
    acc[country].push(market);
    return acc;
  }, {}) : {};
  
  useEffect(() => {
      const firstCountry = Object.keys(groupedMarkets)[0];
      if(firstCountry) setOpenAccordion(firstCountry);
  }, [markets]);

  return (
    <div className="pt-20 bg-cream-100">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/3 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 5rem)' }}>
          <h2 className="text-2xl font-bold mb-4 text-maroon-800">Explore Our Markets</h2>
          <div className="border rounded-lg bg-white shadow-md">
             {Object.entries(groupedMarkets).map(([country, marketList]) => (
                <CustomAccordion 
                    key={country} 
                    title={country}
                    isOpen={openAccordion === country}
                    onToggle={() => setOpenAccordion(openAccordion === country ? null : country)}
                >
                    <ul className="space-y-1">
                        {marketList.map(market => (
                        <li key={market.id}>
                            <button onClick={() => handleMarketSelect(market)} className="w-full text-left p-2 rounded-md hover:bg-gold-500/10 transition">
                            <p className="font-semibold text-maroon-800">{market.name}</p>
                            <p className="text-sm text-gray-600">{market.city}</p>
                            </button>
                        </li>
                        ))}
                    </ul>
                </CustomAccordion>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/3 h-full md:h-auto" style={{ minHeight: '50vh'}}>
          <MapContainer 
            center={mapCenter} 
            zoom={mapZoom} 
            style={{ height: 'calc(100vh - 5rem)', width: '100%' }}
            whenCreated={setMap}
          >
            <ChangeView center={mapCenter} zoom={mapZoom} />
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {Array.isArray(markets) && markets.map(market => (
              <Marker 
                key={market.id} 
                position={market.position}
                ref={el => { if(el) markerRefs.current[market.id] = el; }}
              >
                <Popup>
                  <div className="w-64 -m-4 rounded-lg">
                    <div className="p-4 bg-gradient-to-br from-red-50 to-amber-50 rounded-lg">
                        <h3 className="text-lg font-bold font-playfair text-red-900">{market.name}</h3>
                        <p className="text-sm text-gray-700 mb-2">{market.city}, {market.country}</p>
                        <p className="text-xs text-gray-600 mb-3">{market.description}</p>
                        <Button onClick={() => handleOpenShopsPanel(market)} className="w-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-sm h-9 rounded-md shadow-lg">
                            View Shops
                        </Button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      {selectedMarket && <ShopsPanel market={selectedMarket} onClose={handleCloseShopsPanel} />}
    </div>
  );
};

export default MarketplaceLocator;
