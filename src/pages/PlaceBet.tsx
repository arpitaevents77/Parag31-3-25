import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';
import { Clock, DollarSign, Trophy, AlertCircle, Dice1 as Dice } from 'lucide-react';
import { format } from 'date-fns';

interface Game {
  id: string;
  name: string;
  timezone: string;
  timezone_display: string;
  open_time: string;
  close_time: string;
  is_active: boolean;
  is_open: boolean;
  is_accepting_bets: boolean;
  game_date: string;
}

interface UserProfile {
  balance: number;
}

const PlaceBet = () => {
  const { gameId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [game, setGame] = useState<Game | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [betAmount, setBetAmount] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch game details
        const { data: gameData, error: gameError } = await supabase
          .from('games')
          .select('*')
          .eq('id', gameId)
          .single();

        if (gameError) throw gameError;
        setGame(gameData);

        // Fetch user profile
        const { data: profileData, error: profileError } = await supabase
          .from('users')
          .select('balance')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load game details');
        navigate('/games');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gameId, user, navigate]);

  const handleNumberSelect = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else {
      if (game?.name === 'Triple Jack' && selectedNumbers.length < 3) {
        setSelectedNumbers([...selectedNumbers, number].sort((a, b) => a - b));
      } else if (game?.name === 'Single Malt' && selectedNumbers.length < 1) {
        setSelectedNumbers([number]);
      } else if (selectedNumbers.length < 5) {
        setSelectedNumbers([...selectedNumbers, number].sort((a, b) => a - b));
      } else {
        const maxNumbers = game?.name === 'Triple Jack' ? 3 : game?.name === 'Single Malt' ? 1 : 5;
        toast.error(`You can only select ${maxNumbers} number${maxNumbers > 1 ? 's' : ''} for ${game?.name}`);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !game || !userProfile) return;
    
    const amount = parseFloat(betAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid bet amount');
      return;
    }

    if (amount > userProfile.balance) {
      toast.error('Insufficient balance');
      return;
    }

    let requiredNumbers = 1;
    if (game.name === 'Triple Jack') {
      requiredNumbers = 3;
    } else if (game.name === 'Single Malt') {
      requiredNumbers = 1;
    }

    if (selectedNumbers.length < requiredNumbers) {
      toast.error(`Please select ${requiredNumbers} number${requiredNumbers > 1 ? 's' : ''}`);
      return;
    }

    setSubmitting(true);

    try {
      const { error: betError } = await supabase
        .from('bets')
        .insert([{
          user_id: user.id,
          game_id: game.id,
          numbers: selectedNumbers,
          amount: amount,
          bet_type: 'standard',
          status: 'pending'
        }]);

      if (betError) throw betError;

      toast.success('Bet placed successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error placing bet:', error);
      toast.error('Failed to place bet');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-casino-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-casino-gold"></div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="w-16 h-16 text-casino-gold mx-auto mb-4" />
          <p className="text-gray-300 text-lg">Game not found</p>
        </div>
      </div>
    );
  }

  const isTripleJack = game.name === 'Triple Jack';
  const isSingleMalt = game.name === 'Single Malt';
  let numberRange = 100;
  let gridCols = 'grid-cols-10';
  
  if (isTripleJack) {
    numberRange = 10;
    gridCols = 'grid-cols-5';
  } else if (isSingleMalt) {
    numberRange = 9;
    gridCols = 'grid-cols-3';
  }

  // For Single Malt, we start from 1 instead of 0
  const startNumber = isSingleMalt ? 1 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black to-casino-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-casino-purple rounded-lg shadow-xl p-8 border border-casino-gold/20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-casino-gold mb-2">{game.name}</h1>
                <p className="text-gray-300">
                  {isSingleMalt 
                    ? 'Select exactly 1 number from 1-9 to play!'
                    : isTripleJack
                    ? 'Select exactly 3 numbers from 0-9 to play!'
                    : 'Select your lucky numbers and place your bet!'}
                </p>
              </div>
              <Dice className="w-12 h-12 text-casino-gold" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-casino-gold mr-3" />
                  <div>
                    <p className="text-sm text-gray-300">
                      Opens: {format(new Date(`2000-01-01T${game.open_time}`), 'h:mm a')}
                    </p>
                    <p className="text-sm text-gray-300">
                      Closes: {format(new Date(`2000-01-01T${game.close_time}`), 'h:mm a')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-casino-gold mr-3" />
                  <div>
                    <p className="text-sm text-gray-300">Your Balance</p>
                    <p className="text-xl font-bold text-casino-gold">
                    ⛃{userProfile?.balance.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xl font-semibold text-casino-gold mb-4">
                  {isSingleMalt 
                    ? 'Select Exactly 1 Number'
                    : isTripleJack
                    ? 'Select Exactly 3 Numbers'
                    : 'Select Your Numbers (up to 5)'}
                </label>
                <div className={`grid ${gridCols} gap-4 md:gap-6`}>
                  {Array.from({ length: numberRange }, (_, i) => i + startNumber).map((number) => (
                    <button
                      key={number}
                      type="button"
                      onClick={() => handleNumberSelect(number)}
                      className={`aspect-square flex items-center justify-center text-2xl font-bold rounded-lg transition-all duration-200 ${
                        selectedNumbers.includes(number)
                          ? 'bg-casino-gold text-casino-black transform scale-110 shadow-lg'
                          : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800 border border-casino-gold/10'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xl font-semibold text-casino-gold mb-4">
                  Enter Bet Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400">⛃</span>
                  </div>
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    className="block w-full pl-8 pr-12 py-4 bg-gray-900/50 border border-casino-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-casino-gold"
                    placeholder="Enter amount"
                    step="0.01"
                    min="1"
                  />
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-casino-gold/10">
                <h3 className="text-lg font-semibold text-casino-gold mb-4">Bet Summary</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Selected Numbers:</span>
                    <span className="text-casino-gold">
                      {selectedNumbers.length > 0 ? selectedNumbers.join(', ') : 'None'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bet Amount:</span>
                    <span className="text-casino-gold">
                    ⛃{betAmount ? parseFloat(betAmount).toFixed(2) : '0.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potential Win (max):</span>
                    <span className="text-casino-gold">
                    ⛃{betAmount ? (parseFloat(betAmount) * (isSingleMalt ? 9 : isTripleJack ? 500 : 100)).toFixed(2) : '0.00'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting || !game.is_accepting_bets}
                className={`w-full py-4 px-6 rounded-lg text-lg font-bold transition-colors duration-300 ${
                  submitting || !game.is_accepting_bets
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-casino-gold text-casino-black hover:bg-yellow-400'
                }`}
              >
                {submitting ? 'Placing Bet...' : 'Place Bet'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBet;