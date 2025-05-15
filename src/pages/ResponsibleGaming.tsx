import React from 'react';
import { Shield, Heart, AlertTriangle, HelpCircle, Clock, Lock, Target } from 'lucide-react';
import Card3D from '../components/Card3D';
import GradientBorder from '../components/GradientBorder';

const ResponsibleGaming = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-float">
            <Shield className="w-16 h-16 text-casino-gold mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-5xl font-bold text-casino-gold mb-4 neon-text">Responsible Gaming</h1>
            <p className="text-gray-300">
              At BetGame, we're committed to promoting responsible gaming and providing a safe environment for our players.
            </p>
          </div>

          <div className="space-y-8">
            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Our Commitment</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="animate-shine">
                  We believe in creating a responsible gaming environment where players can enjoy our services safely.
                  Our platform includes various tools and features to help you maintain control over your gaming activity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GradientBorder className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Self-Control Tools</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="animate-shine">Deposit limits</li>
                      <li className="animate-shine">Loss limits</li>
                      <li className="animate-shine">Session time limits</li>
                      <li className="animate-shine">Self-exclusion options</li>
                    </ul>
                  </GradientBorder>
                  
                  <GradientBorder className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Account Controls</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="animate-shine">Reality checks</li>
                      <li className="animate-shine">Account history</li>
                      <li className="animate-shine">Cooling-off periods</li>
                      <li className="animate-shine">Activity statements</li>
                    </ul>
                  </GradientBorder>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Warning Signs</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 animate-shine">Be aware of these potential signs of problem gambling:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GradientBorder className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Behavioral Signs</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li className="animate-shine">Gambling with money needed for essentials</li>
                      <li className="animate-shine">Chasing losses</li>
                      <li className="animate-shine">Lying about gambling habits</li>
                      <li className="animate-shine">Neglecting work or relationships</li>
                    </ul>
                  </GradientBorder>
                  
                  <GradientBorder className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Emotional Signs</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li className="animate-shine">Feeling anxious about gambling</li>
                      <li className="animate-shine">Depression or mood swings</li>
                      <li className="animate-shine">Irritability when not gambling</li>
                      <li className="animate-shine">Feeling guilty after gambling</li>
                    </ul>
                  </GradientBorder>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Support Services</h2>
              </div>

              <div className="space-y-6">
                <GradientBorder className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">24/7 Helplines</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="animate-shine">
                      <strong className="text-casino-gold">National Problem Gambling Helpline:</strong>
                      <br />1-800-522-4700
                    </li>
                    <li className="animate-shine">
                      <strong className="text-casino-gold">Gamblers Anonymous:</strong>
                      <br />1-888-424-3577
                    </li>
                  </ul>
                </GradientBorder>

                <GradientBorder className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Online Resources</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="animate-shine">
                      <strong className="text-casino-gold">GamCare:</strong>
                      <br />www.gamcare.org.uk
                    </li>
                    <li className="animate-shine">
                      <strong className="text-casino-gold">Gambling Therapy:</strong>
                      <br />www.gamblingtherapy.org
                    </li>
                  </ul>
                </GradientBorder>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Need Help?</h2>
              </div>

              <GradientBorder className="p-6">
                <div className="space-y-6 text-gray-300">
                  <p className="animate-shine">
                    Our responsible gaming team is available 24/7 to assist you with:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="animate-shine">Setting up account limits</li>
                    <li className="animate-shine">Self-exclusion requests</li>
                    <li className="animate-shine">Account closure</li>
                    <li className="animate-shine">General support and guidance</li>
                  </ul>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-white mb-2">Contact our team:</p>
                    <p className="animate-shine">Email: responsible@betgame.com</p>
                    <p className="animate-shine">Phone: 1-888-HELP-NOW</p>
                    <p className="animate-shine">Live Chat: Available 24/7 on our platform</p>
                  </div>
                </div>
              </GradientBorder>
            </Card3D>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGaming;