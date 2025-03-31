import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Clock, DollarSign, Trophy, AlertCircle } from 'lucide-react';
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
  last_result?: number;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data, error } = await supabase
          .from('games')
          .select('*')
          .eq('is_active', true)
          .order('game_date', { ascending: true });

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-casino-gold mb-4">Available Games</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose from our selection of exciting games and start winning big today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gradient-to-br from-gray-900 to-casino-purple rounded-lg shadow-xl overflow-hidden border border-casino-gold/20 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-casino-gold">{game.name}</h2>
                  <Trophy className={`w-6 h-6 ${game.last_result ? 'text-casino-gold' : 'text-gray-600'}`} />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-casino-gold" />
                    <div>
                      <p className="text-sm">
                        Opens: {format(new Date(`2000-01-01T${game.open_time}`), 'h:mm a')}
                      </p>
                      <p className="text-sm">
                        Closes: {format(new Date(`2000-01-01T${game.close_time}`), 'h:mm a')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <DollarSign className="w-5 h-5 mr-2 text-casino-gold" />
                    <p className="text-sm">
                      Last Result: {game.last_result || 'No result yet'}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      game.is_open 
                        ? 'bg-casino-green/20 text-green-400' 
                        : 'bg-casino-red/20 text-red-400'
                    }`}>
                      {game.is_open ? 'Open' : 'Closed'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      game.is_accepting_bets 
                        ? 'bg-casino-green/20 text-green-400' 
                        : 'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {game.is_accepting_bets ? 'Accepting Bets' : 'Not Accepting Bets'}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/place-bet/${game.id}`}
                    className={`w-full inline-flex justify-center items-center px-4 py-3 rounded-md text-sm font-semibold transition-colors ${
                      game.is_accepting_bets
                        ? 'bg-casino-gold text-casino-black hover:bg-yellow-400'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={(e) => !game.is_accepting_bets && e.preventDefault()}
                  >
                    {game.is_accepting_bets ? 'Place Bet Now' : 'Betting Closed'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {games.length === 0 && (
          <div className="text-center py-12 bg-gray-900/50 rounded-lg border border-casino-gold/20">
            <AlertCircle className="w-12 h-12 text-casino-gold mx-auto mb-4" />
            <p className="text-gray-300 text-lg">No active games available at the moment.</p>
            <p className="text-gray-400 mt-2">Please check back later for new games. Or login First</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;