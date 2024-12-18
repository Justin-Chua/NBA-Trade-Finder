import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto'
import '@fontsource/poppins'

const theme = extendTheme({
  colors: {
    ATL: '#e03a3e',
    BOS: '#008348',
    BKN: '#777d84',
    CHA: '#00788c',
    CHI: '#cd1f43',
    CLE: '#860038',
    DAL: '#0064b1',
    DEN: '#0d2240',
    DET: '#1d428a',
    GSW: '#1d428a',
    HOU: '#fdb927',
    IND: '#002d62',
    LAC: '#12173f',
    LAL: '#542c81',
    MEM: '#5d76a9',
    MIA: '#961a31',
    MIL: '#00471a',
    MIN: '#0c233f',
    NOP: '#0a2240',
    NYK: '#1d428a',
    OKC: '#057dc1',
    ORL: '#0b77bd',
    PHI: '#1d428a',
    PHO: '#1d1160',
    POR: '#cf0a2c',
    SAC: '#592d81',
    SAS: '#8a8d8f',
    TOR: '#a0a0a3',
    UTA: '#002b5c',
    WAS: '#002b5c'
  },
  fonts: {
    heading: '\'Roboto\', sans-serif',
    body: '\'Poppins\', sans-serif'
  }
})

export default theme
