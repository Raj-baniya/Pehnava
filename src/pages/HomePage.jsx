import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Sparkles, Eye, MapPin, Camera, Star, Users, Video, Store, Crown, Gem, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature} Coming Soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const collections = [
    { name: "Women's Wear", image: "Elegant woman in a beautiful traditional saree", imageUrl: "https://i.pinimg.com/originals/e6/e4/6f/e6e46fab6a47e1091b1f48b83b076841.jpg", link: "/marketplace?gender=women" },
    { name: "Men's Wear", image: "Man dressed in a stylish sherwani for a wedding", imageUrl: "https://symphonyevents.com.au/wp-content/uploads/2023/02/1-1.jpg", link: "/marketplace?gender=men" },
    { name: "Kids' Wear", image: "Smiling child in a colorful ethnic outfit", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/7/437085453/YM/YW/PW/224506717/whatsapp-image-2024-07-23-at-10-24-26-am-1-1000x1000.jpeg", link: "/marketplace?gender=kids" },
    { name: "Royal Accessories", image: "Close-up of intricate Kundan jewelry set", imageUrl: "https://i.etsystatic.com/17634941/r/il/7e4251/4935750649/il_1588xN.4935750649_dcbc.jpg", link: "/marketplace?category=accessories" }
  ];

  return (
    <>
      <Helmet>
        <title>Pehenava - Premium Ethnic Wear with VR/AR Trials</title>
        <meta name="description" content="Experience the future of ethnic fashion with Pehenava. Try on premium sarees, lehengas, and suits using VR/AR technology. Discover local designers and apply as a model." />
      </Helmet>

      <div className="pt-24">
        {/* Premium Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-red-900 to-purple-900">
          {/* Royal Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          
          {/* Premium Background Image */}
          <div className="absolute inset-0">
            <img className="w-full h-full object-cover opacity-30" alt="Royal Indian palace interior" src="https://images.unsplash.com/photo-1674909730707-27782fb12584" />
          </div>
          
          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-red-900/70 to-purple-900/80" />
          
          {/* Floating Royal Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-20 left-20 text-amber-300/30"
          >
            <Crown size={40} className="animate-pulse" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute top-32 right-32 text-rose-300/30"
          >
            <Gem size={35} className="animate-bounce" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
            className="absolute bottom-32 left-32 text-purple-300/30"
          >
            <Heart size={45} className="animate-pulse" />
          </motion.div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-12"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-rose-500/20 backdrop-blur-sm border border-amber-300/30 rounded-full"
              >
                <Crown className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200 font-medium tracking-wide">ROYAL HERITAGE COLLECTION</span>
                <Sparkles className="h-5 w-5 text-amber-300" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold leading-[0.9]"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #b45309)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.8))'
                }}
              >
                PEHENAVA
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-4"
              >
                <h2 className="text-2xl md:text-3xl font-playfair font-medium text-amber-100 tracking-wider">
                  The Art of Royal Attire
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full"></div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg md:text-xl text-amber-50/90 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Experience the pinnacle of ethnic fashion with cutting-edge VR/AR technology, discover master artisans, and find your perfect ensemble crafted to perfection.
              </motion.p>

              {/* Premium CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <Link to="/marketplace">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-600 to-rose-600 hover:from-amber-600 hover:via-amber-700 hover:to-rose-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-500 border border-amber-300/30"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Crown className="h-6 w-6" />
                      Explore Royal Collections
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </Button>
                </Link>
                <Link to="/vr-trials">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden border-2 border-amber-300/50 text-amber-200 hover:bg-amber-500/10 hover:border-amber-300 px-10 py-5 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-amber-500/20 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Eye className="h-6 w-6" />
                      Experience VR Magic
                      <Sparkles className="h-6 w-6 group-hover:animate-spin" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </Link>
              </motion.div>

              {/* Premium Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">500+</div>
                  <div className="text-amber-100/80 font-medium">Royal Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-rose-300 mb-2">50+</div>
                  <div className="text-amber-100/80 font-medium">Master Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">10K+</div>
                  <div className="text-amber-100/80 font-medium">Happy Clients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Premium Collections Section */}
        <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-amber-400/30 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-rose-400/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-400/30 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-purple-500/20 backdrop-blur-sm border border-amber-300/30 rounded-full mb-8"
              >
                <Gem className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200 font-medium tracking-wide">CURATED COLLECTIONS</span>
                <Heart className="h-5 w-5 text-rose-300" />
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24, #ec4899, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                Royal Collections
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Handcrafted with love, designed for elegance. Each piece tells a story of tradition and artistry passed down through generations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={collection.link}>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-amber-300/20 transform group-hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          alt={collection.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src={collection.imageUrl} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <h3 className="text-xl font-semibold font-playfair text-white mb-2 group-hover:text-amber-300 transition-colors">
                          {collection.name}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-8 h-8 bg-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-300/30">
                          <ArrowRight className="h-4 w-4 text-amber-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Premium Personal Stylist Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50">
          <div className="absolute inset-0 opacity-5">
            <img className="w-full h-full object-cover" alt="Mughal art pattern background" src="https://images.unsplash.com/photo-1655127553747-42f800565e53" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-full">
                  <Video className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-700 font-medium tracking-wide">PERSONAL STYLING</span>
                  <Star className="h-5 w-5 text-purple-600" />
                </div>

                <h2 className="text-5xl md:text-6xl font-playfair font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                  Your Personal Stylist Awaits
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Unsure what to wear? Book a one-on-one video consultation with our expert stylists. Get personalized recommendations for your special occasions, from weddings to festive gatherings.
                </p>
                
                <Link to="/personal-stylist">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Video className="h-6 w-6" />
                      Book an Appointment
                      <Sparkles className="h-6 w-6 group-hover:animate-spin" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-1">
                  <img className="w-full h-full object-contain rounded-2xl" alt="2D illustration of a royal painting of a queen" src="https://images.unsplash.com/photo-1582022614003-20a92ab1cbbe" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Marketplace Section */}
        <section className="py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-40 h-40 border border-emerald-400/30 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 border border-teal-400/30 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 order-last md:order-first"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-1">
                  <img className="w-full h-full object-contain rounded-2xl" alt="3D render of a royal Indian artifact" src="https://images.unsplash.com/photo-1611881798501-b41d68d68f59" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-300/30 rounded-full">
                  <Store className="h-5 w-5 text-emerald-400" />
                  <span className="text-emerald-200 font-medium tracking-wide">JOIN OUR MARKETPLACE</span>
                  <Crown className="h-5 w-5 text-emerald-400" />
                </div>

                <h2 className="text-5xl md:text-6xl font-playfair font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                  Join Our Royal Marketplace
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Are you a designer or a boutique owner with a passion for ethnic wear? Showcase your creations to a global audience. Join our curated marketplace and become part of the Pehenava family.
                </p>
                
                <Link to="/join-marketplace">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 hover:from-emerald-700 hover:via-emerald-800 hover:to-teal-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Store className="h-6 w-6" />
                      Become a Seller
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
