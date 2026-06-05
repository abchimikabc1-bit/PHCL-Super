import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export const size = {
  width: 192,
  height: 192,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #f5e6ff 100%)',
          position: 'relative',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width="160"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#4A90E2" />
            </radialGradient>
          </defs>

          {/* Outer ring */}
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="#FFD700"
            strokeWidth="8"
            opacity="0.9"
          />

          {/* Globe */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="url(#globeGradient)"
          />

          {/* Continents */}
          <ellipse
            cx="75"
            cy="85"
            rx="18"
            ry="22"
            fill="#2d5016"
            opacity="0.75"
          />
          <ellipse
            cx="110"
            cy="95"
            rx="15"
            ry="18"
            fill="#2d5016"
            opacity="0.75"
          />
          <ellipse
            cx="130"
            cy="110"
            rx="12"
            ry="14"
            fill="#2d5016"
            opacity="0.75"
          />

          {/* Inner orbit ring */}
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="#C4AF50"
            strokeWidth="3"
            opacity="0.7"
          />

          {/* Center P */}
          <text
            x="100"
            y="118"
            textAnchor="middle"
            fontSize="60"
            fontWeight="bold"
            fill="white"
          >
            P
          </text>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}