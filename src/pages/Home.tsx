import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Trophy, Shield, Clock, Dice1 as Dice, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-casino-black text-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1601776735276-aea8edcbd412?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-casino-purple/50 to-casino-red/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Dice className="w-16 h-16 text-casino-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to <span className="text-casino-gold">BetGame</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the thrill of betting with our secure and fair gaming platform. Join thousands of winners today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/games"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-casino-gold text-casino-black font-bold hover:bg-yellow-400 transition-colors"
            >
              Play Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-to-play"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-casino-gold text-casino-gold font-bold hover:bg-casino-gold hover:text-casino-black transition-colors"
            >
              Learn More
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-casino-black to-casino-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-casino-gold">Why Choose BetGame?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">Secure Platform</h3>
              <p className="text-gray-300">Your security is our top priority with advanced encryption</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">Fair Gaming</h3>
              <p className="text-gray-300">Transparent and fair gaming system for all players</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">Quick Payouts</h3>
              <p className="text-gray-300">Fast and reliable payment processing</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock customer support for all your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Games Section */}
      <div className="py-20 bg-casino-black" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1595732301236-d367178f716e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-casino-gold">Latest Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Game cards will be dynamically populated */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;