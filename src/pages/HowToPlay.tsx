import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Target, Award, AlertCircle, Dice1 as Dice, ChevronRight, Coins, Trophy, Shield } from 'lucide-react';
import Card3D from '../components/Card3D';
import GradientBorder from '../components/GradientBorder';
import AnimatedNumber from '../components/AnimatedNumber';

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-float">
            <Dice className="w-16 h-16 text-casino-gold mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-5xl font-bold text-casino-gold mb-4 neon-text">How to Play</h1>
            <p className="text-xl text-gray-300">Master the game and increase your chances of winning big!</p>
          </div>

          <div className="space-y-8">
            {/* Getting Started Section */}
            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-casino-gold mr-3 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Getting Started</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Welcome to BetGame! Follow these simple steps to start your winning journey:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GradientBorder className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <Shield className="w-5 h-5 text-casino-gold mr-2" />
                      Step 1: Create Account
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="animate-shine">Register with your email</li>
                      <li className="animate-shine">Set up your secure password</li>
                      <li className="animate-shine">Add your wallet address</li>
                      <li className="animate-shine">Verify your account</li>
                    </ul>
                  </GradientBorder>

                  <GradientBorder className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <Coins className="w-5 h-5 text-casino-gold mr-2" />
                      Step 2: Add Funds
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="animate-shine">Choose your payment method</li>
                      <li className="animate-shine">Add funds to your wallet</li>
                      <li className="animate-shine">Get ready to play!</li>
                    </ul>
                  </GradientBorder>
                </div>
              </div>
            </Card3D>

            {/* Game Rules Section */}
            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Trophy className="w-8 h-8 text-casino-gold mr-3 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Game Rules & Winning</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GradientBorder className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Basic Rules</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-300">
                      <li className="animate-shine">Select up to 5 numbers per bet</li>
                      <li className="animate-shine">Minimum bet amount: $1</li>
                      <li className="animate-shine">Two daily draws: Opening & Closing</li>
                      <li className="animate-shine">Results announced promptly</li>
                      <li className="animate-shine">Instant winning notifications</li>
                    </ul>
                  </GradientBorder>

                  <GradientBorder className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Winning Combinations</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-casino-purple/30 rounded">
                        <span className="text-gray-300">Match all numbers:</span>
                        <AnimatedNumber value={100} className="text-casino-gold font-bold" />x
                      </div>
                      <div className="flex items-center justify-between p-2 bg-casino-purple/30 rounded">
                        <span className="text-gray-300">Match 4 numbers:</span>
                        <AnimatedNumber value={10} className="text-casino-gold font-bold" />x
                      </div>
                      <div className="flex items-center justify-between p-2 bg-casino-purple/30 rounded">
                        <span className="text-gray-300">Match 3 numbers:</span>
                        <AnimatedNumber value={5} className="text-casino-gold font-bold" />x
                      </div>
                      
                    </div>
                  </GradientBorder>
                </div>
              </div>
            </Card3D>

            {/* Game Types Section */}
            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Dice className="w-8 h-8 text-casino-gold mr-3 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Game Types</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GradientBorder className="p-6 hover:shadow-neon transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">Classic Game</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl text-casino-gold">5</span>
                    <p className="text-sm text-gray-300">Numbers to Pick</p>
                  </div>
                  <p className="text-gray-300 text-sm text-center">
                    Choose any 5 numbers and win big with multiple combinations!
                  </p>
                </GradientBorder>

                <GradientBorder className="p-6 hover:shadow-neon transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">Triple Jack</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl text-casino-gold">3</span>
                    <p className="text-sm text-gray-300">Numbers to Pick</p>
                  </div>
                  <p className="text-gray-300 text-sm text-center">
                    Select 3 numbers from 0-9 for triple the excitement!
                  </p>
                </GradientBorder>

                <GradientBorder className="p-6 hover:shadow-neon transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">Single Malt</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl text-casino-gold">1</span>
                    <p className="text-sm text-gray-300">Number to Pick</p>
                  </div>
                  <p className="text-gray-300 text-sm text-center">
                    Pick 1 number from 1-9 for quick and exciting wins!
                  </p>
                </GradientBorder>

                <GradientBorder className="p-6 hover:shadow-neon transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">Roll a Dice</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl text-casino-gold">1</span>
                    <p className="text-sm text-gray-300">Number to Pick</p>
                  </div>
                  <p className="text-gray-300 text-sm text-center">
                    Pick 1 number from 1-6 for quick and exciting wins!
                  </p>
                </GradientBorder>
              </div>
            </Card3D>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <Link
                to="/games"
                className="inline-flex items-center px-8 py-4 border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-black font-bold rounded-lg transition-all duration-300 hover:shadow-neon-strong animate-pulse-slow"
              >
                Start Playing Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;