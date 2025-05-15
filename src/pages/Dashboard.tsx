import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';
import { Clock, DollarSign, Trophy, ChevronLeft, ChevronRight, Wallet, CreditCard, Send } from 'lucide-react';
import { format } from 'date-fns';

interface Bet {
  id: string;
  numbers: number[];
  amount: number;
  bet_type: string;
  status: string;
  created_at: string;
  game: {
    name: string;
    game_date: string;
  };
}

interface Transaction {
  id: string;
  amount: number;
  type: string;
  description: string;
  created_at: string;
}

interface UserProfile {
  username: string;
  email: string;
  balance: number;
  wallet_address: string;
  upi_id: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [bets, setBets] = useState<Bet[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'bets' | 'transactions'>('bets');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [editingProfile, setEditingProfile] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState<{
    wallet_address: string;
    upi_id: string;
  }>({ wallet_address: '', upi_id: '' });
  const itemsPerPage = 20;

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        // Fetch user profile
        const { data: profileData, error: profileError } = await supabase
          .from('users')
          .select('username, email, balance, wallet_address, upi_id')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;
        setProfile(profileData);
        setUpdatedProfile({
          wallet_address: profileData.wallet_address || '',
          upi_id: profileData.upi_id || ''
        });

        if (activeTab === 'bets') {
          // Count total bets for pagination
          const { count: totalCount, error: countError } = await supabase
            .from('bets')
            .select('id', { count: 'exact', head: true })
            .eq('user_id', user.id);

          if (countError) throw countError;
          setTotalPages(Math.ceil((totalCount || 0) / itemsPerPage));

          // Fetch bets with pagination
          const { data: betsData, error: betsError } = await supabase
            .from('bets')
            .select(`
              id,
              numbers,
              amount,
              bet_type,
              status,
              created_at,
              game:game_id (
                name,
                game_date
              )
            `)
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .range((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage - 1);

          if (betsError) throw betsError;
          setBets(betsData || []);
        } else {
          // Count total transactions for pagination
          const { count: totalCount, error: countError } = await supabase
            .from('transactions')
            .select('id', { count: 'exact', head: true })
            .eq('user_id', user.id);

          if (countError) throw countError;
          setTotalPages(Math.ceil((totalCount || 0) / itemsPerPage));

          // Fetch transactions with pagination
          const { data: transactionsData, error: transactionsError } = await supabase
            .from('transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .range((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage - 1);

          if (transactionsError) throw transactionsError;
          setTransactions(transactionsData || []);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, navigate, currentPage, activeTab]);

  const handleTabChange = (tab: 'bets' | 'transactions') => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleProfileUpdate = async () => {
    try {
      const { error } = await supabase
        .from('users')
        .update({
          wallet_address: updatedProfile.wallet_address,
          upi_id: updatedProfile.upi_id
        })
        .eq('id', user?.id);

      if (error) throw error;

      setProfile(prev => ({
        ...prev!,
        wallet_address: updatedProfile.wallet_address,
        upi_id: updatedProfile.upi_id
      }));
      setEditingProfile(false);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    }
  };

  const handleWithdrawRequest = async () => {
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (amount > (profile?.balance || 0)) {
      toast.error('Insufficient balance');
      return;
    }

    if (!profile?.wallet_address && !profile?.upi_id) {
      toast.error('Please add either a wallet address or UPI ID before withdrawing');
      return;
    }

    try {
      const { error: transactionError } = await supabase
        .from('transactions')
        .insert([{
          user_id: user?.id,
          amount: -amount,
          type: 'withdrawal',
          description: `Withdrawal request${profile?.wallet_address ? ' to wallet' : ' to UPI'}`
        }]);

      if (transactionError) throw transactionError;

      const { error: balanceError } = await supabase
        .from('users')
        .update({ balance: (profile?.balance || 0) - amount })
        .eq('id', user?.id);

      if (balanceError) throw balanceError;

      setShowWithdrawModal(false);
      setWithdrawAmount('');
      toast.success('Withdrawal request submitted successfully');

      // Refresh profile data
      const { data: updatedProfile } = await supabase
        .from('users')
        .select('username, email, balance, wallet_address, upi_id')
        .eq('id', user?.id)
        .single();

      if (updatedProfile) {
        setProfile(updatedProfile);
      }
    } catch (error) {
      console.error('Error processing withdrawal:', error);
      toast.error('Failed to process withdrawal');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-casino-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-casino-gold"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        {/* User Profile Section */}
        <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 mb-8 border border-casino-gold/20">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-casino-gold mb-2">Welcome, {profile?.username}</h2>
              <p className="text-gray-300">{profile?.email}</p>
            </div>
            <button
              onClick={() => setEditingProfile(!editingProfile)}
              className="px-4 py-2 bg-casino-purple text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {editingProfile ? 'Cancel Editing' : 'Edit Profile'}
            </button>
          </div>

          {editingProfile ? (
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={updatedProfile.wallet_address}
                  onChange={(e) => setUpdatedProfile(prev => ({ ...prev, wallet_address: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-casino-gold"
                  placeholder="Enter your wallet address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  UPI ID
                </label>
                <input
                  type="text"
                  value={updatedProfile.upi_id}
                  onChange={(e) => setUpdatedProfile(prev => ({ ...prev, upi_id: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-casino-gold"
                  placeholder="Enter your UPI ID"
                />
              </div>
              <button
                onClick={handleProfileUpdate}
                className="px-6 py-2 bg-casino-gold text-casino-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-casino-gold mr-3" />
                  <h3 className="text-xl font-semibold text-white">Balance</h3>
                </div>
                <p className="text-3xl font-bold text-casino-gold">${profile?.balance.toFixed(2)}</p>
                <button
                  onClick={() => setShowWithdrawModal(true)}
                  className="mt-4 w-full px-4 py-2 bg-casino-gold text-casino-black rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Withdraw
                </button>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <div className="flex items-center mb-4">
                  <Wallet className="w-8 h-8 text-casino-gold mr-3" />
                  <h3 className="text-xl font-semibold text-white">Wallet Address</h3>
                </div>
                <p className="text-sm text-gray-300 break-all">
                  {profile?.wallet_address || 'No wallet address added'}
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-8 h-8 text-casino-gold mr-3" />
                  <h3 className="text-xl font-semibold text-white">UPI ID</h3>
                </div>
                <p className="text-sm text-gray-300">
                  {profile?.upi_id || 'No UPI ID added'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Activity Section */}
        <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-casino-gold">Activity History</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleTabChange('bets')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'bets'
                    ? 'bg-casino-gold text-casino-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Recent Bets
              </button>
              <button
                onClick={() => handleTabChange('transactions')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'transactions'
                    ? 'bg-casino-gold text-casino-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Transactions
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            {activeTab === 'bets' ? (
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Game</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Numbers</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {bets.map((bet) => (
                    <tr key={bet.id} className="hover:bg-gray-900/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-white font-medium">{bet.game.name}</div>
                        <div className="text-sm text-gray-400">{format(new Date(bet.game.game_date), 'PP')}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {bet.numbers.map((num, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-casino-purple text-white text-sm font-medium border border-casino-gold/20"
                            >
                              {num}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-casino-gold font-medium">${bet.amount.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          bet.status === 'won' ? 'bg-casino-green/20 text-green-400' :
                          bet.status === 'lost' ? 'bg-casino-red/20 text-red-400' :
                          'bg-yellow-600/20 text-yellow-400'
                        }`}>
                          {bet.status.charAt(0).toUpperCase() + bet.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {format(new Date(bet.created_at), 'PP')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-900/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          transaction.type === 'deposit' ? 'bg-casino-green/20 text-green-400' :
                          transaction.type === 'withdrawal' ? 'bg-casino-red/20 text-red-400' :
                          'bg-yellow-600/20 text-yellow-400'
                        }`}>
                          {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`font-medium ${
                          transaction.type === 'deposit' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {transaction.type === 'deposit' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {format(new Date(transaction.created_at), 'PP')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-300">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-casino-purple text-white hover:bg-casino-purple/80'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-casino-purple text-white hover:bg-casino-purple/80'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 max-w-md w-full border border-casino-gold/20">
            <h3 className="text-2xl font-bold text-casino-gold mb-6">Withdraw Funds</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Amount to Withdraw
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-casino-gold"
                    placeholder="Enter amount"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  Withdrawal will be sent to:
                  {profile?.wallet_address && (
                    <span className="block mt-1 text-casino-gold break-all">
                      Wallet: {profile.wallet_address}
                    </span>
                  )}
                  {profile?.upi_id && (
                    <span className="block mt-1 text-casino-gold">
                      UPI: {profile.upi_id}
                    </span>
                  )}
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleWithdrawRequest}
                  className="flex-1 py-2 bg-casino-gold text-casino-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Confirm Withdrawal
                </button>
                <button
                  onClick={() => {
                    setShowWithdrawModal(false);
                    setWithdrawAmount('');
                  }}
                  className="flex-1 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;