import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Video, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PersonalStylistPage = () => {

  const stylists = [
    { name: "Anjali Verma", specialty: "Bridal & Wedding", image: "https://castyou-website.sgp1.digitaloceanspaces.com/2019/08/IMG-20190708-WA0045.jpg" },
    { name: "Rohan Mehra", specialty: "Men's Festive Wear", image: "https://media.gettyimages.com/id/637540630/fr/photo/beau-touriste.jpg?s=612x612&w=0&k=20&c=NIAIrPA8ObAW02xSVowS5mQIKW53E7UVh8tsTSXjO0I=" },
    { name: "Priya Desai", specialty: "Contemporary & Fusion", image: "https://pearlwebsitecdn-prod-d8bgbfaqbgcghcfw.a01.azurefd.net/drupal-files/inline-images/Eka%20Lakhani_0.jpg" },
  ];

  const calendlyUrl = "https://calendly.com/rajbaniya81083/30min";

  return (
    <>
      <Helmet>
        <title>Personal Stylist - Book a Video Consultation | Pehenava</title>
        <meta name="description" content="Book a personal styling session with our fashion experts. Get personalized advice for weddings, festivals, and more via video call." />
      </Helmet>

      <div className="pt-24 min-h-screen stylist-pattern">
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="royal-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
            >
              <Video className="mx-auto h-16 w-16 text-purple-500 mb-4" />
              <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-6">
                Your Personal Stylist
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get expert fashion advice tailored to your style and occasion. Book a one-on-one video consultation with our professional stylists.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="royal-card p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center gradient-text mb-12">
                Meet Our Expert Stylists
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stylists.map((stylist, index) => (
                  <motion.div
                    key={stylist.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="royal-card p-6 rounded-2xl text-center"
                  >
                    <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden border-4 border-purple-200">
                      <img className="w-full h-full object-cover" alt={stylist.name} src={stylist.image} />
                    </div>
                    <h3 className="text-xl font-semibold font-playfair">{stylist.name}</h3>
                    <p className="text-purple-600">{stylist.specialty}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10" id="booking-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="royal-card p-8 md:p-12 rounded-2xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-8">
                Book Your Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Click the button below to find a time that works for you and schedule your personal styling session.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Session
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PersonalStylistPage;
