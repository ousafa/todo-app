import Lists from './components/Lists.jsx';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Alexandria",
    }
})

function App() {

  return (
      <ThemeProvider theme={theme}>
        <div className="App">
            <Lists />
        </div>
      </ThemeProvider>
  )
}

export default App
