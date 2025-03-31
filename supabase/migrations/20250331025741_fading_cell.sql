/*
  # Add Single Malt Game

  1. New Game
    - Add Single Malt game to the games table
    - Game allows players to select 1 number from 1-9
*/

-- Insert Single Malt game
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
  'Single Malt',
  'UTC',
  'UTC',
  '09:00:00',
  '21:00:00',
  true,
  true,
  true,
  CURRENT_DATE
);