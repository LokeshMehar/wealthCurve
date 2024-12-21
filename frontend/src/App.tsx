import { createTheme } from '@mui/material/styles'
import { useMemo, useState } from 'react'
import { themeSettings } from './theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'


function App() {
  const theme = useMemo(() => 
    createTheme(themeSettings),
    []
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      here we go
    </ThemeProvider>
  )
}

export default App
