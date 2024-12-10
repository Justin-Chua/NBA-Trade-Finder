import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto'
import '@fontsource/poppins'

const theme = extendTheme({
  colors: {
    ATL: '#e03a3e',
    BOS: '#007a33',
    BKN: '#777d84',
    CHA: '#00788c',
    CHI: '#ce1141',
    CLE: '#860038',
    DAL: '#00538c',
    DEN: '#0e2240',
    DET: '#1d42ba',
    GSW: '#1d428a',
    HOU: '#ce1141',
    IND: '#002d62',
    LAC: '#1d428a',
    LAL: '#552583',
    MEM: '#5d76a9',
    MIA: '#98002e',
    MIL: '#00471b',
    MIN: '#0c2340',
    NOP: '#0c2340',
    NYK: '#006bb6',
    OKC: '#007ac1',
    ORL: '#0077c0',
    PHI: '#006bb6',
    PHO: '#1d1160',
    POR: '#e03a3e',
    SAC: '#5a2d81',
    SAS: '#c4ced4',
    TOR: '#ce1141',
    UTA: '#002b5c',
    WAS: '#002b5c'
  },
  fonts: {
    heading: '\'Roboto\', sans-serif',
    body: '\'Poppins\', sans-serif'
  }
})

export default theme
