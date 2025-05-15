import React from 'react';
import { Mail, Phone, MessageSquare, Clock, MapPin, HelpCircle, Send } from 'lucide-react';
import Card3D from '../components/Card3D';
import GradientBorder from '../components/GradientBorder';

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-float">
            <HelpCircle className="w-16 h-16 text-casino-gold mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-5xl font-bold text-casino-gold mb-4 neon-text">Customer Support</h1>
            <p className="text-gray-300">We're here to help you 24/7. Choose your preferred way to reach us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <div>
                  <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                  <p className="text-gray-300">Always here when you need us</p>
                </div>
              </div>
              <p className="text-gray-300 animate-shine">
                Our dedicated support team is available around the clock to assist you with any questions or concerns.
              </p>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Global Support</h3>
                  <p className="text-gray-300">Multi-language assistance</p>
                </div>
              </div>
              <p className="text-gray-300 animate-shine">
                Support available in multiple languages to serve our global community of players.
              </p>
            </Card3D>
          </div>

          <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
            <h2 className="text-2xl font-bold text-casino-gold mb-8">Contact Methods</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <GradientBorder className="p-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-casino-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                      <p className="text-gray-300 animate-shine">support@betgame.com</p>
                      <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </GradientBorder>

                <GradientBorder className="p-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-casino-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                      <p className="text-gray-300 animate-shine">+1 (888) 123-4567</p>
                      <p className="text-sm text-gray-400 mt-1">24/7 toll-free support</p>
                    </div>
                  </div>
                </GradientBorder>
              </div>

              <div className="space-y-8">
                <GradientBorder className="p-6">
                  <div className="flex items-start">
                    <MessageSquare className="w-6 h-6 text-casino-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                      <p className="text-gray-300 animate-shine">Available 24/7</p>
                      <p className="text-sm text-gray-400 mt-1">Average response time: 2 minutes</p>
                    </div>
                  </div>
                </GradientBorder>

                <GradientBorder className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Support Form</h3>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 bg-gray-800 border border-casino-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-casino-gold transition-colors"
                    />
                    <textarea
                      placeholder="How can we help?"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-casino-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-casino-gold transition-colors"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-casino-gold text-casino-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </GradientBorder>
              </div>
            </div>
          </Card3D>

          <Card3D className="mt-12 bg-gradient-to-r from-gray-900 to-casino-purple p-8">
            <h2 className="text-2xl font-bold text-casino-gold mb-6">FAQ</h2>
            <div className="space-y-6">
              <GradientBorder className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">How do I reset my password?</h3>
                <p className="text-gray-300 animate-shine">
                  Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.
                </p>
              </GradientBorder>
              <GradientBorder className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">How long do withdrawals take?</h3>
                <p className="text-gray-300 animate-shine">
                  Most withdrawals are processed within 24 hours, but the actual time may vary depending on your payment method.
                </p>
              </GradientBorder>
              <GradientBorder className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Is my personal information secure?</h3>
                <p className="text-gray-300 animate-shine">
                  Yes, we use industry-standard encryption and security measures to protect your personal and financial information.
                </p>
              </GradientBorder>
            </div>
          </Card3D>
        </div>
      </div>
    </div>
  );
};

export default Support;