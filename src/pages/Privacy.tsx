import React from 'react';
import { Lock, Shield, Eye, Database, Key, UserCheck } from 'lucide-react';
import Card3D from '../components/Card3D';
import GradientBorder from '../components/GradientBorder';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-float">
            <Shield className="w-16 h-16 text-casino-gold mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-5xl font-bold text-casino-gold mb-4 neon-text">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: March 30, 2025</p>
          </div>

          <div className="space-y-8">
            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Data Protection</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="animate-shine">
                  At BetGame, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GradientBorder className="p-6">
                    <Key className="w-6 h-6 text-casino-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Security Measures</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="animate-shine">256-bit SSL encryption</li>
                      <li className="animate-shine">Secure payment processing</li>
                      <li className="animate-shine">Regular security audits</li>
                      <li className="animate-shine">Protected user data storage</li>
                    </ul>
                  </GradientBorder>
                  
                  <GradientBorder className="p-6">
                    <UserCheck className="w-6 h-6 text-casino-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="animate-shine">Clear data usage policies</li>
                      <li className="animate-shine">User data access rights</li>
                      <li className="animate-shine">Regular policy updates</li>
                      <li className="animate-shine">Compliance reporting</li>
                    </ul>
                  </GradientBorder>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Information We Collect</h2>
              </div>

              <div className="space-y-6">
                <GradientBorder className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li className="animate-shine">Name and contact information</li>
                    <li className="animate-shine">Date of birth and identity verification documents</li>
                    <li className="animate-shine">Financial information for transactions</li>
                    <li className="animate-shine">Gaming preferences and history</li>
                  </ul>
                </GradientBorder>

                <GradientBorder className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li className="animate-shine">IP address and device information</li>
                    <li className="animate-shine">Browser type and settings</li>
                    <li className="animate-shine">Login times and activity logs</li>
                    <li className="animate-shine">Cookies and similar technologies</li>
                  </ul>
                </GradientBorder>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Your Rights</h2>
              </div>
              
              <GradientBorder className="p-6">
                <div className="space-y-4 text-gray-300">
                  <p className="animate-shine">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="animate-shine">Access your personal data</li>
                    <li className="animate-shine">Correct inaccurate information</li>
                    <li className="animate-shine">Request data deletion</li>
                    <li className="animate-shine">Object to data processing</li>
                    <li className="animate-shine">Receive your data in a portable format</li>
                  </ul>
                </div>
              </GradientBorder>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Contact Us</h2>
              </div>

              <GradientBorder className="p-6">
                <p className="text-gray-300 mb-4 animate-shine">
                  If you have any questions about our Privacy Policy, please contact our Data Protection Officer:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p className="animate-shine">Email: privacy@betgame.com</p>
                  <p className="animate-shine">Phone: +1 (888) 123-4567</p>
                  <p className="animate-shine">Address: 123 Gaming Street, Malta, MT 4567</p>
                </div>
              </GradientBorder>
            </Card3D>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;