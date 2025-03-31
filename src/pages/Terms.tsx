import React from 'react';
import { Shield, Scale, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-casino-gold mb-4">Terms of Service</h1>
            <p className="text-gray-300">Last updated: March 30, 2025</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Legal & Compliance</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  BetGame operates under License No. MGA/B2C/555/2025, issued by the Malta Gaming Authority.
                  We comply with all applicable gaming regulations and maintain strict standards for fair play and responsible gaming.
                </p>
                
                <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Licensing & Regulation</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Licensed and regulated by the Malta Gaming Authority</li>
                    <li>Compliant with EU gaming regulations</li>
                    <li>Regular audits by independent testing agencies</li>
                    <li>Certified random number generation (RNG)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Terms of Use</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">1. Account Terms</h3>
                  <div className="space-y-3">
                    <p>
                      By creating an account on BetGame, you agree to provide accurate, complete, and current information.
                      You are responsible for maintaining the security of your account and password.
                    </p>
                    <p>
                      You must be at least 18 years old and legally able to participate in online gambling in your jurisdiction.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">2. Betting Rules</h3>
                  <div className="space-y-3">
                    <p>
                      All bets are final once placed and confirmed. Winnings are calculated based on the odds at the time of bet placement.
                    </p>
                    <p>
                      We reserve the right to void bets in cases of technical errors, suspicious betting patterns, or violation of our terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">3. Deposits & Withdrawals</h3>
                  <div className="space-y-3">
                    <p>
                      All deposits and withdrawals must be made through approved payment methods.
                      We reserve the right to request verification documents before processing withdrawals.
                    </p>
                    <p>
                      Minimum and maximum limits apply to both deposits and withdrawals.
                      Processing times may vary depending on the payment method chosen.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">4. Fair Gaming</h3>
                  <div className="space-y-3">
                    <p>
                      We use certified random number generation (RNG) to ensure fair play.
                      Any attempt to manipulate games or exploit technical vulnerabilities will result in account termination.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">5. Account Termination</h3>
                  <div className="space-y-3">
                    <p>
                      We reserve the right to suspend or terminate accounts that violate our terms of service.
                      This includes but is not limited to: fraudulent activity, multiple accounts, or underage gambling.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-casino-gold mr-4" />
                <h2 className="text-2xl font-bold text-casino-gold">Disclaimer</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Gambling can be addictive. Please gamble responsibly and be aware of the risks involved.
                  If you feel you may have a gambling problem, please visit our Responsible Gaming page for help and resources.
                </p>
                <p>
                  These terms are subject to change. Users will be notified of any significant changes via email or website announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;