import React from 'react';
import { Shield, Scale, AlertCircle, FileText, Book, Gavel } from 'lucide-react';
import Card3D from '../components/Card3D';
import GradientBorder from '../components/GradientBorder';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-float">
            <Gavel className="w-16 h-16 text-casino-gold mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-5xl font-bold text-casino-gold mb-4 neon-text">Terms of Service</h1>
            <p className="text-gray-300">Last updated: March 30, 2025</p>
          </div>

          <div className="space-y-8">
            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Legal & Compliance</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="animate-shine">
                  BetGame operates under License No. MGA/B2C/555/2025, issued by the Malta Gaming Authority.
                  We comply with all applicable gaming regulations and maintain strict standards for fair play and responsible gaming.
                </p>
                
                <GradientBorder className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Licensing & Regulation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="animate-shine">Licensed and regulated by the Malta Gaming Authority</li>
                    <li className="animate-shine">Compliant with EU gaming regulations</li>
                    <li className="animate-shine">Regular audits by independent testing agencies</li>
                    <li className="animate-shine">Certified random number generation (RNG)</li>
                  </ul>
                </GradientBorder>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Terms of Use</h2>
              </div>

              <div className="space-y-6">
                <GradientBorder className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">1. Account Terms</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="animate-shine">
                      By creating an account on BetGame, you agree to provide accurate, complete, and current information.
                      You are responsible for maintaining the security of your account and password.
                    </p>
                    <p className="animate-shine">
                      You must be at least 18 years old and legally able to participate in online gambling in your jurisdiction.
                    </p>
                  </div>
                </GradientBorder>

                <GradientBorder className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">2. Betting Rules</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="animate-shine">
                      All bets are final once placed and confirmed. Winnings are calculated based on the odds at the time of bet placement.
                    </p>
                    <p className="animate-shine">
                      We reserve the right to void bets in cases of technical errors, suspicious betting patterns, or violation of our terms.
                    </p>
                  </div>
                </GradientBorder>

                <GradientBorder className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">3. Deposits & Withdrawals</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="animate-shine">
                      All deposits and withdrawals must be made through approved payment methods.
                      We reserve the right to request verification documents before processing withdrawals.
                    </p>
                    <p className="animate-shine">
                      Minimum and maximum limits apply to both deposits and withdrawals.
                      Processing times may vary depending on the payment method chosen.
                    </p>
                  </div>
                </GradientBorder>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-r from-gray-900 to-casino-purple p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-casino-gold mr-4 animate-pulse-slow" />
                <h2 className="text-2xl font-bold text-casino-gold">Disclaimer</h2>
              </div>
              
              <GradientBorder className="p-6">
                <div className="space-y-4 text-gray-300">
                  <p className="animate-shine">
                    Gambling can be addictive. Please gamble responsibly and be aware of the risks involved.
                    If you feel you may have a gambling problem, please visit our Responsible Gaming page for help and resources.
                  </p>
                  <p className="animate-shine">
                    These terms are subject to change. Users will be notified of any significant changes via email or website announcements.
                  </p>
                </div>
              </GradientBorder>
            </Card3D>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;