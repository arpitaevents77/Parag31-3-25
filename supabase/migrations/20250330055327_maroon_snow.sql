/*
  # Add Triple Jack Game

  1. New Game
    - Add Triple Jack game to the games table
    - Game allows players to select 3 numbers from 0-9
*/

-- Insert Triple Jack game
INSERT INTO games (
  name,
  timezone,
  timezone_display,
  open_time,
  close_time,
  is_active,
  is_open,
  is_accepting_bets,
  game_date
) VALUES (
  'Triple Jack',
  'UTC',
  'UTC',
  '09:00:00',
  '21:00:00',
  true,
  true,
  true,
  CURRENT_DATE
);