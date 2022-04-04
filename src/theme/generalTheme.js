const generals = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: [400, 700],
  purple: 'hsl(243, 51%, 70%)',
  purpleAlpha85: 'hsla(243, 51%, 70%, 0.85)',
  positive: 'hsl(163, 72%, 41%)',
  negative: 'hsl(356, 69%, 56%)',
  black60: 'rgba(0,0,0,0.6)',
}

const lightTheme = {
  primary: 'hsl(227, 47%, 96%)',
  primaryHover: 'hsl(227, 47%, 91%)',
  backgroundTop: 'hsl(225, 100%, 98%)',
  background: 'hsl(0, 0%, 100%)',
  primaryText: ' hsl(230, 17%, 14%)',
  secondaryText: 'hsl(228, 12%, 44%)',
  generals,
}

const darkTheme = {
  primary: 'hsl(228, 28%, 20%)',
  primaryHover: 'hsl(228, 28%, 25%)',
  backgroundTop: 'hsl(232, 19%, 15%)',
  background: 'hsl(230, 17%, 14%)',
  primaryText: 'hsl(0, 0%, 100%)',
  secondaryText: 'hsl(228, 34%, 66%)',
  generals,
}

export { darkTheme, lightTheme, generals }
