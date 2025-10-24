import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, ShoppingBag, Heart, Package, Store, Video, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-amber-600 font-semibold'
          : 'text-gray-600 hover:text-amber-600'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature} Coming Soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const navItems = [
    { name: 'Women', path: '/marketplace?gender=women' },
    { name: 'Men', path: '/marketplace?gender=men' },
    { name: 'Kids', path: '/marketplace?gender=kids' },
    { name: 'VR Trials', path: '/vr-trials' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="images/WhatsApp Image 2025-10-08 at 3.05.52 PM.jpeg" 
              alt="Pehenava Logo - Premium Ethnic Wear" 
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link to="/marketplace-locator">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-amber-600 hover:bg-amber-50">
                <MapPin className="h-4 w-4 mr-2" />
                Locator
              </Button>
            </Link>
            <Link to="/personal-stylist">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-amber-600 hover:bg-amber-50">
                <Video className="h-4 w-4 mr-2" />
                Stylist
              </Button>
            </Link>
            <Link to="/join-marketplace">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-amber-600 hover:bg-amber-50">
                <Store className="h-4 w-4 mr-2" />
                Sell
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-amber-600 hover:bg-amber-50">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleFeatureClick('Profile')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFeatureClick('Orders')}>
                  <Package className="mr-2 h-4 w-4" />
                  <span>Orders</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFeatureClick('Wishlist')}>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Wishlist</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleFeatureClick('Login')}>
                  <span>Login / Sign Up</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-amber-600 hover:bg-amber-50" onClick={() => handleFeatureClick('Shopping Cart')}>
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:bg-amber-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-200 space-y-3">
                 <Link to="/marketplace-locator" onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md">
                    <MapPin className="h-5 w-5 mr-3" /> Marketplace Locator
                 </Link>
                 <Link to="/personal-stylist" onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md">
                    <Video className="h-5 w-5 mr-3" /> Personal Stylist
                 </Link>
                 <Link to="/join-marketplace" onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md">
                    <Store className="h-5 w-5 mr-3" /> Join as a Shop
                 </Link>
                 <button onClick={() => { handleFeatureClick('Login'); setIsOpen(false); }} className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md">
                    <User className="h-5 w-5 mr-3" /> Login / Profile
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
