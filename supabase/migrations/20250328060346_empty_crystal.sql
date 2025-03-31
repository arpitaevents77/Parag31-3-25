/*
  # Create Admin User and Admins Table

  1. New Tables
    - admins: Store admin user information
  
  2. Changes
    - Add admin user
    - Add wallet address to existing user
*/

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Create admin user
INSERT INTO users (id, username, email, wallet_address, balance)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  'govindsingh747',
  'Govindsingh747@gmail.com',
  '0x11C42cC66a84A7745EbA3026dB35C1aC0ABa1A06',
  1000
);

-- Add user to admins table
INSERT INTO admins (user_id)
VALUES ('00000000-0000-0000-0000-000000000000');