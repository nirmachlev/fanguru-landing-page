import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Landing() {
  const newLogoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d702f0f952c55916b2185b/aae71dc1e_image.png";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans" dir="ltr">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <motion.div
          className="text-center w-full max-w-4xl"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          {/* Logo and Coming Soon Badge */}
          <motion.div variants={fadeInUp} className="mb-10">
            <img
              src={newLogoUrl}
              alt="Fanguru Logo"
              className="h-24 md:h-28 w-auto mx-auto mb-6"
            />
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Coming Soon
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={fadeInUp}
          >
            The World's First AI-Powered Commercial Marketplace for Brands
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            A platform connecting brands with AI influencer commercials, creating authentic, scalable, and unprecedentedly impactful campaigns.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-lg shadow-lg text-lg">
              <a href="mailto:nir@fanguru.ai">
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="w-full max-w-5xl mt-24 md:mt-32 grid md:grid-cols-2 gap-8 text-left"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <Card className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-5 flex items-center justify-center bg-gray-100 rounded-xl">
                  <Zap className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">For Brands</h3>
                <p className="text-gray-600 leading-relaxed">Access a diverse marketplace of AI influencers. Launch hyper-targeted campaigns in minutes, with full creative control and advanced performance analytics.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-5 flex items-center justify-center bg-gray-100 rounded-xl">
                  <Users className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">For Influencers</h3>
                <p className="text-gray-600 leading-relaxed">License your digital likeness and unlock new revenue streams. Our platform ensures your brand identity is protected while expanding your reach globally.</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center p-8 text-gray-500 text-sm">
        © 2024 Fanguru.ai. All rights reserved.
      </footer>
    </div>
  );
}
