'use client'

import { useTheme } from '@/app/(frontend)/hooks/useTheme'
import { SocialIcon } from 'react-social-icons'

interface HeaderProps {
  onScheduleClick: () => void
  isPiPActive?: boolean
}

export default function Header({ onScheduleClick, isPiPActive }: HeaderProps) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Michroma:wght@400&display=swap');

        .futuristic-glow {
          animation: subtleGlow 3s ease-in-out infinite alternate;
        }

        @keyframes subtleGlow {
          from {
            text-shadow:
              0 2px 4px rgba(0, 0, 0, 0.3),
              0 0 8px rgba(255, 255, 255, 0.1);
          }
          to {
            text-shadow:
              0 2px 8px rgba(0, 0, 0, 0.4),
              0 0 12px rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>

      <nav
        className="text-white py-2 px-8 shadow-2xl"
        style={{
          background: 'linear-gradient(to right, #002868, #bf0a30, #ffffff, #bf0a30, #002868)',
        }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <h1
            className="text-3xl font-bold tracking-wide futuristic-glow"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              letterSpacing: '4px',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 8px rgba(255,255,255,0.1)',
              textTransform: 'uppercase',
              fontStretch: 'condensed',
            }}
          >
            Mahaa NEWS USA
          </h1>
          <div className="flex items-center space-x-4">
            {isPiPActive && (
              <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">PiP Active</span>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">LIVE</span>
              {/* Contact & Social */}
              <div className="text-center md:text-right">
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
