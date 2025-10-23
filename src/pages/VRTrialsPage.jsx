
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Eye, Camera, Smartphone, Monitor, Play, Settings, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { LaserFlow } from '@/components/ui/LaserFlow';
import '@/components/ui/LaserFlow.css';

const VRTrialsPage = () => {
  const [selectedDevice, setSelectedDevice] = useState('vr');
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    if (feature === 'Start VR Experience') {
      window.location.href = 'https://virtualtryonbypehenava.netlify.app';
    } else {
      toast({
        title: `🚧 ${feature} Coming Soon!`,
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  const devices = [
    {
      id: 'vr',
      name: 'VR Headset',
      icon: Eye,
      description: 'Immersive 3D experience with VR headsets',
      features: ['360° View', 'Full Body Tracking', 'Realistic Fitting']
    },
    {
      id: 'ar',
      name: 'AR Mobile',
      icon: Smartphone,
      description: 'Try on clothes using your smartphone camera',
      features: ['Real-time Preview', 'Easy Sharing', 'No Equipment Needed']
    },
    {
      id: 'web',
      name: 'Web AR',
      icon: Monitor,
      description: 'Browser-based AR experience on desktop',
      features: ['High Resolution', 'Multiple Angles', 'Easy Comparison']
    }
  ];

  const vrExperiences = [
    {
      id: 1,
      name: "Royal Saree Collection",
      image: "https://i.imgur.com/gJ9Nn6c.png",
      duration: "5-10 min",
      difficulty: "Beginner",
      category: "Sarees"
    },
    {
      id: 2,
      name: "Classic Tartan Collection",
      image: "https://i.imgur.com/gJ9Nn6c.png",
      duration: "8-12 min",
      difficulty: "Beginner",
      category: "Tartan"
    },
    {
      id: 3,
      name: "Bridal Lehenga Showcase",
      image: "https://i.imgur.com/sIWHCNo.jpeg",
      duration: "10-15 min",
      difficulty: "Intermediate",
      category: "Lehengas"
    },
    {
      id: 4,
      name: "Festive Wear Experience",
      image: "https://i.imgur.com/sIWHCNo.jpeg",
      duration: "8-12 min",
      difficulty: "Beginner",
      category: "Festival Wear"
    },
    {
      id: 5,
      name: "Designer Studio Tour",
      image: "https://i.imgur.com/gJ9Nn6c.png",
      duration: "15-20 min",
      difficulty: "Advanced",
      category: "Behind the Scenes"
    },
    {
      id: 6,
      name: "Mandala Collection",
      image: "https://i.imgur.com/sIWHCNo.jpeg",
      duration: "5-10 min",
      difficulty: "Beginner",
      category: "Mandala"
    }
  ];

  return (
    <>
      <Helmet>
        <title>VR & AR Trials - Virtual Try-On Experience | Pehenava</title>
        <meta name="description" content="Experience the future of fashion with VR and AR trials. Try on ethnic wear virtually using cutting-edge technology at Pehenava." />
      </Helmet>

      <LaserFlow className="pt-20 min-h-screen sparkling-black-bg">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 dark-glass-effect p-8 rounded-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 premium-text-shadow">
                VR & AR Trials
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Step into the future of fashion. Try on our premium ethnic wear collection using cutting-edge Virtual and Augmented Reality technology.
              </p>
              <Button
                onClick={() => handleFeatureClick('Start VR Experience')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Start VR Experience
              </Button>
            </motion.div>

            {/* Device Selection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {devices.map((device) => (
                <div
                  key={device.id}
                  className={`dark-glass-effect p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedDevice === device.id 
                      ? 'ring-2 ring-purple-400' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedDevice(device.id)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white/10`}>
                      <device.icon className={`h-8 w-8 ${selectedDevice === device.id ? 'text-purple-300' : 'text-white/80'}`} />
                    </div>
                    <h3 className="text-xl font-semibold font-playfair mb-3 text-white premium-text-shadow">
                      {device.name}
                    </h3>
                    <p className="text-white/80 mb-4">
                      {device.description}
                    </p>
                    <div className="space-y-2">
                      {device.features.map((feature, index) => (
                        <div key={index} className="text-sm text-white/70 flex items-center justify-center">
                          <div className={`w-1.5 h-1.5 ${selectedDevice === device.id ? 'bg-purple-300' : 'bg-white/50'} rounded-full mr-2`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* VR Experiences */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16 dark-glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 premium-text-shadow">
                VR Experiences
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Choose from our curated VR experiences designed to showcase our premium ethnic wear collections.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vrExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="dark-glass-effect rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => handleFeatureClick(experience.name)}
                >
                  <div className="aspect-video bg-black/50 relative overflow-hidden">
                    <img  
                      alt={experience.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     src={experience.image} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {experience.category}
                      </span>
                    </div>
.                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="bg-white/90 text-purple-700 hover:bg-white rounded-full"
                      >
                        <Play className="h-5 w-5 mr-2" />
                        Start Experience
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-playfair mb-3 text-white premium-text-shadow">
                      {experience.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                      <span className="flex items-center">
                        <Camera className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </span>
                      <span className="flex items-center">
                        <Settings className="h-4 w-4 mr-1" />
                        {experience.difficulty}
                      </span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFeatureClick('Launch VR Experience');
                      }}
                    >
                      Launch Experience
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16 dark-glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 premium-text-shadow">
                How It Works
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get started with VR/AR trials in just a few simple steps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Choose Your Device',
                  description: 'Select VR headset, AR mobile, or web AR based on your preference and available equipment.'
                },
                {
                  step: '02',
                  title: 'Select Experience',
                  description: 'Browse our curated VR experiences and choose the collection you want to explore.'
                },
                {
                  step: '03',
                  title: 'Try & Share',
                  description: 'Experience the virtual fitting, take screenshots, and share with friends and family.'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center dark-glass-effect p-8 rounded-2xl"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-4 text-white premium-text-shadow">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 dark-glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white premium-text-shadow">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Download our VR app or start your AR experience right in your browser. The future of fashion is here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => handleFeatureClick('Download VR App')}
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download VR App
                </Button>
                <Button
                  onClick={() => handleFeatureClick('Start Web AR')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Start Web AR
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </LaserFlow>
    </>
  );
};

export default VRTrialsPage;
