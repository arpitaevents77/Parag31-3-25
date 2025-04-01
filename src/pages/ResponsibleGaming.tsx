import React from 'react';
import { Shield, Heart, AlertTriangle, HelpCircle } from 'lucide-react';

const ResponsibleGaming = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-casino-gold mb-4">Responsible Gaming</h1>
            <p className="text-gray-300">
              At LuxmeBet, we're committed to promoting responsible gaming and providing a safe environment for our players.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Our Commitment</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  We believe in creating a responsible gaming environment where players can enjoy our services safely.
                  Our platform includes various tools and features to help you maintain control over your gaming activity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Self-Control Tools</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Deposit limits</li>
                      <li>Loss limits</li>
                      <li>Session time limits</li>
                      <li>Self-exclusion options</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Account Controls</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Reality checks</li>
                      <li>Account history</li>
                      <li>Cooling-off periods</li>
                      <li>Activity statements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Warning Signs</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <p>Be aware of these potential signs of problem gambling:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Behavioral Signs</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Gambling with money needed for essentials</li>
                      <li>Chasing losses</li>
                      <li>Lying about gambling habits</li>
                      <li>Neglecting work or relationships</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Emotional Signs</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Feeling anxious about gambling</li>
                      <li>Depression or mood swings</li>
                      <li>Irritability when not gambling</li>
                      <li>Feeling guilty after gambling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Support Services</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <p>
                  If you or someone you know needs help with problem gambling, these organizations provide free, confidential support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-4">24/7 Helplines</h3>
                    <ul className="space-y-3">
                      <li>
                        <strong className="text-casino-gold">National Problem Gambling Helpline:</strong>
                        <br />1-800-522-4700
                      </li>
                      <li>
                        <strong className="text-casino-gold">Gamblers Anonymous:</strong>
                        <br />1-888-424-3577
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Online Resources</h3>
                    <ul className="space-y-3">
                      <li>
                        <strong className="text-casino-gold">GamCare:</strong>
                        <br />www.gamcare.org.uk
                      </li>
                      <li>
                        <strong className="text-casino-gold">Gambling Therapy:</strong>
                        <br />www.gamblingtherapy.org
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Need Help?</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <p>
                  Our responsible gaming team is available 24/7 to assist you with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Setting up account limits</li>
                  <li>Self-exclusion requests</li>
                  <li>Account closure</li>
                  <li>General support and guidance</li>
                </ul>
                
                <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                  <p className="font-semibold text-white mb-2">Contact our team:</p>
                  <p>Email: responsible@LuxmeBet.Fun</p>
                  <p>Phone: 1-888-HELP-NOW</p>
                  <p>Live Chat: Available 24/7 on our platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGaming;