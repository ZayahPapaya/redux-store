import './App.css';
import { Items } from './features/items/Items'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { fetchCards } from './features/items/itemsSlice';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('Use effect')
    dispatch(fetchCards())
  }, [dispatch]);
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
