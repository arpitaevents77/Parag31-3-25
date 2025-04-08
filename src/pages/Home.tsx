import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Trophy, Shield, Clock, Dice1 as Dice, ChevronRight, Wallet, Timer } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';

interface Game {
  id: string;
  name: string;
  open_time: string;
  close_time: string;
  is_active: boolean;
  is_accepting_bets: boolean;
  game_date: string;
  opening_winner_number: string | null;
  closing_winner_number: string | null;
}

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data, error } = await supabase
          .from('games')
          .select('*')
          .eq('is_active', true)
          .order('game_date', { ascending: true })
          .limit(3);

        if (error) throw error;
        setGames(data || []);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const networks = [
    {
      name: 'BNB Chain',
      icon: '/public/image/currencies/BNBlogo.png',
      description: 'Fast and low-cost transactions on the BNB Smart Chain',
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      name: 'Ethereum',
      icon: '/public/image/currencies/Ethlogo.png',
      description: 'Secure and reliable transactions on the Ethereum network',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Solana',
      icon: '/public/image/currencies/solanalogo.png',
      description: 'High-speed, low-fee transactions on Solana',
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Polygon',
      icon: '/public/image/networks/Pol.png',
      description: 'Scalable and efficient transactions on Polygon',
      color: 'from-indigo-600 to-indigo-800'
    }
  ];

  const currencies = [
    {
      name: 'BNB',
      symbol: 'BNB',
      icon: '/public/image/currencies/BNBlogo.png',
      minAmount: '0.01 BNB',
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      icon: '/public/image/currencies/Ethlogo.png',
      minAmount: '0.01 ETH',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'MECOIN',
      symbol: 'MECOIN',
      icon: '/public/image/currencies/me.png',
      minAmount: '5 MECOIN',
      color: 'from-green-600 to-green-800'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      icon: '/public/image/currencies/solanalogo.png',
      minAmount: '.010 SOL',
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'USDT',
      symbol: 'USDT',
      icon: '/public/image/currencies/usdtlogo.png',
      minAmount: '1 USDT',
      color: 'from-teal-600 to-teal-800'
    }
  ];

  return (
    <div className="bg-casino-black text-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1601776735276-aea8edcbd412?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-casino-purple/50 to-casino-red/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to <span className="text-casino-gold">LuxMeBet</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the thrill of betting with our secure and fair gaming platform. Join thousands of winners today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"> 
            <Link
              to="/games"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-casino-gold text-casino-black font-bold hover:bg-yellow-400 transition-colors"
            >
              Play Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-to-play"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-casino-gold text-casino-gold font-bold hover:bg-casino-gold hover:text-casino-black transition-colors"
            >
              Learn More
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-casino-black to-casino-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-casino-gold">Why Choose BetGame?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">Secure Platform</h3>
              <p className="text-gray-300">Your security is our top priority with advanced encryption</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">Fair Gaming</h3>
              <p className="text-gray-300">Transparent and fair gaming system for all players</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">Quick Payouts</h3>
              <p className="text-gray-300">Fast and reliable payment processing</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-900 to-casino-purple border border-casino-gold/20">
              <div className="bg-casino-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-casino-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-casino-gold">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock customer support for all your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Networks Section */}
      <div className="py-20 bg-casino-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-casino-gold">Supported Networks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networks.map((network, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg bg-gradient-to-br ${network.color} shadow-xl transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center justify-center mb-4">
                  <img src={network.icon} alt={network.name} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{network.name}</h3>
                <p className="text-gray-200 text-center text-sm">{network.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Currencies Section */}
      <div className="py-20 bg-gradient-to-b from-casino-black to-casino-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-casino-gold">Accepted Currencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {currencies.map((currency, index) => (
              <Link
                key={index}
                to="/add-funds"
                className={`p-6 rounded-lg bg-gradient-to-br ${currency.color} shadow-xl transform hover:scale-105 transition-transform duration-300 group cursor-pointer`}
              >
                <div className="flex items-center justify-center mb-4">
                  <img src={currency.icon} alt={currency.name} className="w-12 h-12" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">{currency.name}</h3>
                  <p className="text-sm text-gray-200">Min: {currency.minAmount}</p>
                  <div className="mt-4 flex items-center justify-center text-white group-hover:text-casino-gold transition-colors">
                    <Wallet className="w-4 h-4 mr-2" />
                    <span className="text-sm">Add Funds</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Games Section */}
      <div className="py-20 bg-casino-black" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1595732301236-d367178f716e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-casino-gold">Latest Games</h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-casino-gold"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {games.map((game) => (
                <Link
                  key={game.id}
                  to={`/place-bet/${game.id}`}
                  className="bg-gradient-to-br from-gray-900 to-casino-purple rounded-lg shadow-xl overflow-hidden border border-casino-gold/20 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-casino-gold">{game.name}</h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        game.is_accepting_bets
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {game.is_accepting_bets ? 'Accepting Bets' : 'Closed'}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Timer className="w-5 h-5 mr-2 text-casino-gold" />
                        <div>
                        <p className="text-sm">
                          Game Date: {format(new Date(game.game_date + 'T00:00:00'), 'PP')}
                        </p>
                          <p className="text-sm">
                            Opens: {format(new Date(`2000-01-01T${game.open_time}`), 'h:mm a')}
                          </p>
                          <p className="text-sm">
                            Closes: {format(new Date(`2000-01-01T${game.close_time}`), 'h:mm a')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-300">
                        <Trophy className="w-5 h-5 mr-2 text-casino-gold" />
                        <div>
                          <p className="text-sm">
                            Opening Number: {game.opening_winner_number || 'Pending'}
                          </p>
                          <p className="text-sm">
                            Closing Number: {game.closing_winner_number || 'Pending'}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <button className="w-full py-2 px-4 bg-casino-gold text-casino-black font-semibold rounded hover:bg-yellow-400 transition-colors">
                          Place Bet
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && games.length === 0 && (
            <div className="text-center text-gray-300">
              <p>No active games available at the moment.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/games"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-black transition-colors"
            >
              View All Games
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;