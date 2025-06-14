import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h3 className="text-xl font-bold">EliteStore</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier destination for high-quality products and exceptional shopping experience.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home & Garden</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="text-gray-400 mr-3" />
                <span className="text-gray-400">info@elitestore.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-gray-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="text-gray-400 mr-3" />
                <span className="text-gray-400">123 Commerce St, City, State</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EliteStore. All rights reserved. Made with ❤️ for Internshala submission.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;