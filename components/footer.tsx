
'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Organization */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WC</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Western Cape</h3>
                <p className="text-sm text-gray-400">Digital Leadership</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Positioning the Western Cape as Africa's leading digital hub through 
              strategic transformation, innovation, and inclusive growth.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Department of Economic Development and Tourism</p>
                  <p>Western Cape Government</p>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:digital@westerncape.gov.za" className="text-sm text-gray-400 hover:text-white transition-colors">
                  digital@westerncape.gov.za
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">+27 21 483 9500</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#strategy" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                Strategic Approach
              </a>
              <a href="#governance" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                Governance Structure
              </a>
              <a href="#risks" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                Risk Management
              </a>
              <a href="#innovation" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                Innovation Districts
              </a>
              <a href="#monitoring" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                Monitoring & Evaluation
              </a>
            </div>
          </div>

          {/* Key Initiatives */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Key Initiatives</h4>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-white mb-1">Digital Enablement Fund</div>
                <div className="text-gray-400">Supporting SME digital transformation</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-white mb-1">#SkillsBoostWesternCape</div>
                <div className="text-gray-400">Addressing critical skills gaps</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-white mb-1">Broadband 2.0 PPP</div>
                <div className="text-gray-400">R2 billion infrastructure investment</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-white mb-1">Innovation Districts</div>
                <div className="text-gray-400">Cape Town • Stellenbosch • George</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Western Cape Government. All rights reserved.
          </div>
          <div className="text-sm text-gray-400">
            Strategic Framework • July 2025
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
