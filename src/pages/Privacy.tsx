import React from 'react';
import { Lock, Shield, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-casino-gold mb-4">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: March 30, 2025</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Data Protection</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  At BetGame, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <Lock className="w-6 h-6 text-casino-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Security Measures</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>256-bit SSL encryption</li>
                      <li>Secure payment processing</li>
                      <li>Regular security audits</li>
                      <li>Protected user data storage</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                    <Eye className="w-6 h-6 text-casino-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Clear data usage policies</li>
                      <li>User data access rights</li>
                      <li>Regular policy updates</li>
                      <li>Compliance reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Information We Collect</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Name and contact information</li>
                    <li>Date of birth and identity verification documents</li>
                    <li>Financial information for transactions</li>
                    <li>Gaming preferences and history</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>IP address and device information</li>
                    <li>Browser type and settings</li>
                    <li>Login times and activity logs</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h3>
                  <div className="space-y-3">
                    <p>We use your information to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Provide and improve our services</li>
                      <li>Process transactions and verify identity</li>
                      <li>Prevent fraud and maintain security</li>
                      <li>Comply with legal obligations</li>
                      <li>Send important updates and communications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">Data Sharing</h3>
                  <p>
                    We only share your information with trusted third parties who assist us in operating our website,
                    conducting our business, or servicing you. These parties agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">Your Rights</h3>
                  <div className="space-y-3">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate information</li>
                      <li>Request data deletion</li>
                      <li>Object to data processing</li>
                      <li>Receive your data in a portable format</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <h2 className="text-2xl font-bold text-casino-gold mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our Privacy Policy, please contact our Data Protection Officer:
              </p>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <p className="text-gray-300">Email: privacy@betgame.com</p>
                <p className="text-gray-300">Phone: +1 (888) 123-4567</p>
                <p className="text-gray-300">Address: 123 Gaming Street, Malta, MT 4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;