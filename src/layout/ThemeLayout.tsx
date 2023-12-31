import React from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: '#DA584B',
  secondary: '#70B252',
  tertiary: '#E5B454',
  neutral: '#94979A',
  backgroundLight: '#2C2F33',
  backgroundDark: '#222528',
  backgroundModal: '#393D41',
  white: '#FFF'
}

interface Props {
  children: JSX.Element
}

const ThemeLayout: React.FC<Props> = ({ children }) =>
<ThemeProvider theme={theme}>
  <Toaster />
  {children}
</ThemeProvider>

export default ThemeLayout
