import './App.css';
import { Items } from './features/items/Items'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Items />
      </ThemeProvider>
    </div>
  );
}
// check reduxPersist for local storage tomfoolery
export default App;
