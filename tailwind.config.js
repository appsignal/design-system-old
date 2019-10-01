// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  variants: {
  },
  theme: {
    fontFamily: {
      display: ['MuseoSansRounded', 'sans-serif'],
      body: ['MuseoSansRounded', 'sans-serif'],
      mono: ['SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono','Courier New','monospace']
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        'darkest': '#011940',
        'dark': '#21375A',
        'medium': '#6B7B96',
        'light': '#EDEFF3'
      },
      spacing: {
        px: '1px',
        80: '20rem',
        100: '25rem'
      },
      inset: {
        '-16': '-4rem'
      }
    }
  }
}
