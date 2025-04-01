import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Dice1 as Dice } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-casino-purple to-casino-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dice className="w-8 h-8 text-casino-gold" />
              <h3 className="text-xl font-bold text-casino-gold">LuxmeBet</h3>
            </div>
            <p className="text-gray-300">
              Your premier destination for online betting entertainment. Experience the thrill of the game!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-casino-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/games" className="text-gray-300 hover:text-casino-gold transition-colors">Games</Link></li>
              <li><Link to="/how-to-play" className="text-gray-300 hover:text-casino-gold transition-colors">How to Play</Link></li>
              <li><Link to="/add-funds" className="text-gray-300 hover:text-casino-gold transition-colors">Add Funds</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-casino-gold transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-casino-gold">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-casino-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-casino-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/responsible-gaming" className="text-gray-300 hover:text-casino-gold transition-colors">Responsible Gaming</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-casino-gold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-casino-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/Luxmebet" className="text-gray-300 hover:text-casino-gold transition-colors" target='_blank'>
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-casino-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-casino-gold transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} LuxmeBet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;