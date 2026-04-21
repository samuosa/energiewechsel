/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent:           '#85a704',
        'accent-dark':    '#6B8703',
        secondary:        '#8C8B8E',
        'bg-subtle':      '#fafaf8',
        'bg-muted':       '#f6f6f2',
        surface:          '#ffffff',
        'text-body':      '#2a2a2b',
        'text-soft':      '#3a3a3b',
        'text-near-black':'#1a1a1b',
        gold: {
          start: '#B18432',
          mid:   '#F3D478',
          end:   '#FEFBB3'
        }
      },
      fontFamily: {
        body: ['"Droid Sans"', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'fluid-hero':   ['clamp(40px,5.2vw,60px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-page':   ['clamp(40px,5vw,64px)',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-h2':     ['clamp(30px,3.4vw,40px)', { lineHeight: '1.15',letterSpacing: '-0.02em' }],
        'fluid-about':  ['clamp(34px,3.8vw,48px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-kpi':    ['clamp(36px,4.6vw,56px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-prin':   ['clamp(40px,4.5vw,56px)', { lineHeight: '1',   letterSpacing: '-0.02em' }]
      },
      maxWidth: {
        container: '1200px'
      },
      spacing: {
        header:  '72px',
        subnav:  '56px',
        section: '112px'
      },
      boxShadow: {
        'btn-primary': '0 1px 0 rgba(0,0,0,0.04), 0 6px 18px -10px rgba(111,132,64,0.45)',
        'card-hover':  '0 12px 32px -18px rgba(0,0,0,0.18)'
      },
      borderRadius: {
        DEFAULT: '4px',
        sm:      '3px'
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(.2,.7,.2,1)'
      },
      zIndex: {
        header: '80',
        subnav: '70',
        skip:   '200'
      }
    }
  },
  plugins: []
}
