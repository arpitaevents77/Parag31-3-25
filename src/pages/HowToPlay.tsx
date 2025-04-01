import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Target, Award, AlertCircle, Dice1 as Dice, ChevronRight } from 'lucide-react';

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Dice className="w-16 h-16 text-casino-gold mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-casino-gold mb-4">How to Play</h1>
            <p className="text-gray-300">Master the game and increase your chances of winning big!</p>
          </div>

          <div className="space-y-8">
            {/* Getting Started Section */}
            <section className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-casino-gold">
                <Target className="w-8 h-8 mr-3" />
                Getting Started
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Welcome to LuxmeBet! Follow these simple steps to start your winning journey:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">Step 1: Create Account</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Register with your email</li>
                      <li>Set up your secure password</li>
                      <li>Add your wallet address</li>
                      <li>Verify your account</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">Step 2: Add Funds</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Choose your payment method</li>
                      <li>Add funds to your wallet</li>
                      <li>Get ready to play!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Game Rules Section */}
            <section className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-casino-gold">
                <Award className="w-8 h-8 mr-3" />
                Game Rules & Winning
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">Basic Rules</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-300">
                      <li>Select up to 5 numbers per bet</li>
                      <li>Minimum bet amount: ⛃1</li>
                      <li>Two daily draws: Opening & Closing</li>
                      <li>Results announced promptly</li>
                      <li>Instant winning notifications</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">Winning Combinations</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-300">
                      <li>Match all numbers: <span className="text-casino-gold">Win 100x</span></li>
                      <li>Match 4 numbers: <span className="text-casino-gold">Win 50x</span></li>
                      <li>Match 3 numbers: <span className="text-casino-gold">Win 2x</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Information */}
            <section className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-casino-gold">
                <DollarSign className="w-8 h-8 mr-3" />
                Payment & Withdrawals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Deposit Methods</h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-300">
                    <li>Credit/Debit Cards</li>
                    <li>Bank Transfer</li>
                    <li>Cryptocurrency (MECOIN)</li>
                    <li>E-Wallets</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Withdrawal Info</h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-300">
                    <li>24-hour processing time</li>
                    <li>Multiple withdrawal options</li>
                    <li>Minimum withdrawal: $10</li>
                    <li>Secure transactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Responsible Gaming */}
            <section className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-casino-gold">
                <AlertCircle className="w-8 h-8 mr-3" />
                Responsible Gaming
              </h2>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <p className="text-gray-300 mb-6">
                  At LuxmeBet, we promote responsible gaming. Please follow these guidelines:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                  <ul className="list-disc list-inside space-y-3">
                    <li>Set personal betting limits</li>
                    <li>Never chase losses</li>
                    <li>Gamble only what you can afford</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Take regular breaks</li>
                    <li>Keep track of time spent</li>
                    <li>Seek help if needed</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <Link
                to="/games"
                className="inline-flex items-center px-8 py-4 border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-black font-bold rounded-lg transition-colors duration-300"
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