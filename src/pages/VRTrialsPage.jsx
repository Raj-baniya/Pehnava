
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Eye, Smartphone, Monitor, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import LaserFlow from '@/components/ui/LaserFlow';

const VRTrialsPage = () => {
  const [selectedDevice, setSelectedDevice] = useState('vr');
  const { toast } = useToast();
  const revealImgRef = useRef(null);

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

  return (
    <>
      <Helmet>
        <title>VR & AR Trials - Virtual Try-On Experience | Pehenava</title>
        <meta name="description" content="Experience the future of fashion with VR and AR trials. Try on ethnic wear virtually using cutting-edge technology at Pehenava." />
      </Helmet>
      
      <div 
        style={{ 
          height: '800px', 
          position: 'relative', 
          overflow: 'hidden',
          backgroundColor: '#060010'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        <LaserFlow
          horizontalBeamOffset={0.0}
          verticalBeamOffset={0.2}
          color="#FF79C6"
        />
        
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '86%',
          height: '40%',
          backgroundColor: '#060010',
          borderRadius: '20px',
          border: '2px solid #FF79C6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          zIndex: 6
        }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
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
        </div>

        <img
          ref={revealImgRef}
          src="https://i.imgur.com/gJ9Nn6c.png"
          alt="Reveal effect"
          style={{
            position: 'absolute',
            width: '100%',
            top: '-50%',
            zIndex: 5,
            mixBlendMode: 'lighten',
            opacity: 0.3,
            pointerEvents: 'none',
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
          }}
        />
      </div>
      <div style={{ backgroundColor: '#060010', color: 'white', paddingTop: '4rem', paddingBottom: '4rem' }}>
        {/* Device Selection */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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

        {/* How It Works */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
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
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
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
      </div>
    </>
  );
};

export default VRTrialsPage;
