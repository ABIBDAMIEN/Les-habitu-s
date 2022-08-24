// import React from 'react';
import './App.css';
import ShopList from 'pages/ShopList';
import { ThemeProvider } from '@mui/material';
import { theme } from 'Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <ShopList/>
    </ThemeProvider>
  );
}

export default App;
