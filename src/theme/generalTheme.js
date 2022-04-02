const generals = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: [400, 700],
  purple: 'hsl(243, 51%, 70%)', // Chart color
  purpleAlpha85: 'hsla(243, 51%, 70%, 0.85)', // Chart color
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
  primary: 'hsl(228, 28%, 20%)', // Card bg
  primaryHover: 'hsl(228, 28%, 25%)',
  backgroundTop: 'hsl(232, 19%, 15%)', // Top BG Pattern
  background: 'hsl(230, 17%, 14%)', // BG
  primaryText: 'hsl(0, 0%, 100%)',
  secondaryText: 'hsl(228, 34%, 66%)',
  generals,
}

export { darkTheme, lightTheme, generals }
/*
{
  dark: {
    primary: 'blue',
  },
  ligth: {
    primary: 'pink',
  },
  /*success: {
      main: 'hsl(163, 72%, 41%)', //Mks color
    },
    error: {
      main: 'hsl(356, 69%, 56%)', //MKS color
    },
    toggle: {
      main: 'hsl(230, 22%, 74%)',
      dark: 'linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)',
      //como manejo los dark and light options?
    },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },*/
