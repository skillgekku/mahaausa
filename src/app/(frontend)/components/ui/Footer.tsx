'use client'

import { useTheme } from '@/app/(frontend)/hooks/useTheme'
import { THEME_CLASSES } from '@/app/(frontend)/lib/constants'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  const { isDarkMode } = useTheme()
  const theme = THEME_CLASSES[isDarkMode ? 'dark' : 'light']

  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${theme.footer} text-center py-8 border-t`}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Mahaa Digital</h3>
            <p className="text-sm opacity-75">Premium streaming experience</p>
            <div className="flex justify-center md:justify-start items-center mt-3 space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-xs font-medium">LIVE 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-3"></h4>
            <div className="space-y-2">
              <div>
                <button className="text-sm opacity-75 hover:opacity-100 transition-opacity hover:text-white"></button>
              </div>
              <div>
                {/*                 <button className="text-sm opacity-75 hover:opacity-100 transition-opacity hover:text-white">
                  📅 TV Schedule
                </button> */}
              </div>
              <div>
                <button className="text-sm opacity-75 hover:opacity-100 transition-opacity hover:text-white"></button>
              </div>
              <div>
                <button className="text-sm opacity-75 hover:opacity-100 transition-opacity hover:text-white"></button>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
            <div className="flex justify-center md:justify-end items-center space-x-3 mb-3">
              <SocialIcon
                url="https://www.facebook.com/MAHAUSA.LLC/"
                style={{ height: 32, width: 32 }}
                className="hover:scale-110 transition-transform"
              />
              <SocialIcon
                url="https://x.com/mahaausa"
                style={{ height: 32, width: 32 }}
                className="hover:scale-110 transition-transform"
              />
              <SocialIcon
                url="https://www.youtube.com/@mahaanewsusa"
                style={{ height: 32, width: 32 }}
                className="hover:scale-110 transition-transform"
              />
              <SocialIcon
                url="https://www.instagram.com/mahaausa/"
                style={{ height: 32, width: 32 }}
                className="hover:scale-110 transition-transform"
              />
            </div>
            <div className="text-xs opacity-75">
              <p>📧coo@mahaanews.org</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm">&copy; {currentYear} Mahaa Digital. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-xs opacity-75">
              <button className="hover:opacity-100 transition-opacity hover:text-white">
                Privacy Policy
              </button>
              <span>•</span>
              <button className="hover:opacity-100 transition-opacity hover:text-white">
                Terms of Service
              </button>
              <span>•</span>
              <button className="hover:opacity-100 transition-opacity hover:text-white">
                Support
              </button>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="mt-3 text-center">
          <p className="text-xs opacity-50">App Version 2.1.0 •</p>
        </div>
      </div>
    </footer>
  )
}
