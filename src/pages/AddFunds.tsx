import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';
import { CreditCard, DollarSign, Wallet } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const AddFunds = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const MECOIN_WALLET = '0xBa3a191b330bc8A528b52eaA56Fe01F35BD92cDd';

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

    setLoading(true);

    try {
      const { error: balanceError } = await supabase.rpc('add_funds', {
        user_id: user.id,
        amount: numAmount
      });

      if (balanceError) throw balanceError;

      const { error: transactionError } = await supabase
        .from('transactions')
        .insert([{
          user_id: user.id,
          amount: numAmount,
          type: 'deposit',
          description: 'Added funds to wallet'
        }]);

      if (transactionError) throw transactionError;

      toast.success('Funds added successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Failed to add funds');
    } finally {
      setLoading(false);
    }
  };

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
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-casino-black bg-casino-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-casino-gold"
                  >
                    {loading ? 'Processing...' : 'Add Funds'}
                  </button>
                </form>
              </div>

              {/* MECOIN Payment Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-casino-gold mb-4">Pay with MECOIN</h2>
                <div className="bg-white p-6 rounded-lg text-center">
                  <QRCodeSVG value={MECOIN_WALLET} size={200} className="mx-auto mb-4" />
                </div>
                <div className="bg-gray-800/50 p-4 rounded-md">
                  <div className="flex items-center space-x-2 mb-3">
                    <Wallet className="h-5 w-5 text-casino-gold" />
                    <h3 className="text-sm font-medium text-gray-200">MECOIN Wallet Address</h3>
                  </div>
                  <p className="text-sm text-gray-300 break-all font-mono bg-gray-900 p-3 rounded">
                    {MECOIN_WALLET}
                  </p>
                </div>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>• Send MECOIN to this wallet address for instant funding</p>
                  <p>• Minimum deposit: 5 MECOIN</p>
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
                  <p className="text-gray-300">Credit card deposits are instant. MECOIN transfers may take up to 10 minutes to confirm.</p>
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