import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';
import { CreditCard, DollarSign, Wallet, CreditCard as CardIcon, Globe, Banknote, Building2, Smartphone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const AddFunds = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState('MECOIN');
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  
  const WALLET_ADDRESSES = {
    MECOIN: '0xBa3a191b330bc8A528b52eaA56Fe01F35BD92cDd',
    SOL: '57HjmwzCxtf81bgvS5Cr89yvzgtmEhnrxEo9HSVUEs4t',
    BNB: '0xBa3a191b330bc8A528b52eaA56Fe01F35BD92cDd',
    USDT: '0xBa3a191b330bc8A528b52eaA56Fe01F35BD92cDd',
    ETH: '0xCa72211bF238E5d9510B1fBE32bbC99b2740a8E8'
  };

  const MIN_AMOUNTS = {
    MECOIN: 5,
    SOL: 10,
    BNB: 0.1,
    USDT: 10,
    ETH: 0.01
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    setShowPaymentPage(true);
  };

  if (showPaymentPage) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-casino-black to-casino-purple py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-2xl p-8 border border-casino-gold/20">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-casino-gold mb-4">Payment Processing</h1>
                <p className="text-gray-300 text-lg mb-2">Amount to Add: ${amount}</p>
                <p className="text-yellow-400 mb-8">We are currently working on implementing these payment methods.</p>
                <p className="text-gray-300">Please try cryptocurrency payments or check back later.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-casino-gold/10 text-center">
                  <CardIcon className="w-12 h-12 text-casino-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Credit/Debit Card</h3>
                  <p className="text-gray-400">Visa, Mastercard, American Express</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-casino-gold/10 text-center">
                  <Globe className="w-12 h-12 text-casino-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Online Banking</h3>
                  <p className="text-gray-400">Direct bank transfer</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-casino-gold/10 text-center">
                  <Banknote className="w-12 h-12 text-casino-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">PayPal</h3>
                  <p className="text-gray-400">Fast and secure payments</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-casino-gold/10 text-center">
                  <Building2 className="w-12 h-12 text-casino-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Bank Deposit</h3>
                  <p className="text-gray-400">Direct bank deposit</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-casino-gold/10 text-center">
                  <Smartphone className="w-12 h-12 text-casino-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">UPI</h3>
                  <p className="text-gray-400">Instant mobile payments</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowPaymentPage(false)}
                  className="px-6 py-3 bg-casino-gold text-casino-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-2xl p-8 border border-casino-gold/20">
            <h1 className="text-3xl font-bold mb-8 text-casino-gold">Add Funds to Your Account</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Payment Form */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-casino-gold mb-4">Credit Card Payment</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-200 mb-2">
                      Amount to Add
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="bg-gray-800 focus:ring-casino-gold focus:border-casino-gold block w-full pl-10 pr-12 sm:text-sm border-gray-600 rounded-md text-white"
                        placeholder="0.00"
                        step="0.01"
                        min="1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 sm:text-sm">USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-md">
                    <h3 className="text-sm font-medium text-gray-200 mb-3">Payment Methods</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="payment-method"
                          value="credit-card"
                          className="h-4 w-4 text-casino-gold focus:ring-casino-gold border-gray-600"
                          defaultChecked
                        />
                        <span className="flex items-center text-gray-200">
                          <CreditCard className="h-5 w-5 text-casino-gold mr-2" />
                          Credit/Debit Card
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-casino-black bg-casino-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-casino-gold"
                  >
                    Add Funds
                  </button>
                </form>
              </div>

              {/* Cryptocurrency Payment Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-casino-gold mb-4">Pay with Cryptocurrency</h2>
                
                <div className="bg-gray-800/50 p-4 rounded-md mb-4">
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Select Cryptocurrency
                  </label>
                  <select
                    value={selectedCrypto}
                    onChange={(e) => setSelectedCrypto(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md text-white py-2 px-3"
                  >
                    <option value="MECOIN">MECOIN</option>
                    <option value="SOL">Solana (SOL)</option>
                    <option value="BNB">Binance Coin (BNB)</option>
                    <option value="USDT">Tether (USDT)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                  </select>
                </div>

                <div className="bg-white p-6 rounded-lg text-center">
                  <QRCodeSVG value={WALLET_ADDRESSES[selectedCrypto]} size={200} className="mx-auto mb-4" />
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-md">
                  <div className="flex items-center space-x-2 mb-3">
                    <Wallet className="h-5 w-5 text-casino-gold" />
                    <h3 className="text-sm font-medium text-gray-200">Wallet Address</h3>
                  </div>
                  <p className="text-sm text-gray-300 break-all font-mono bg-gray-900 p-3 rounded">
                    {WALLET_ADDRESSES[selectedCrypto]}
                  </p>
                </div>

                <div className="text-sm text-gray-300 space-y-2">
                  <p>• Send {selectedCrypto} to this wallet address for instant funding</p>
                  <p>• Minimum deposit: {MIN_AMOUNTS[selectedCrypto]} {selectedCrypto}</p>
                  <p>• Funds will be credited automatically</p>
                  <p>• Transaction fees may apply</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6">
              <h3 className="text-lg font-medium text-casino-gold mb-4">Important Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-800/50 p-4 rounded-md">
                  <h4 className="font-medium text-casino-gold mb-2">Security</h4>
                  <p className="text-gray-300">All transactions are encrypted and secure. We use industry-standard security protocols.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-md">
                  <h4 className="font-medium text-casino-gold mb-2">Processing Time</h4>
                  <p className="text-gray-300">Credit card deposits are instant. Crypto transfers may take up to 10 minutes to confirm.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-md">
                  <h4 className="font-medium text-casino-gold mb-2">Support</h4>
                  <p className="text-gray-300">24/7 customer support available for any payment-related issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunds;