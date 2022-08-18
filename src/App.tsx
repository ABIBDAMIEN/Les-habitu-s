import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/MainLayout';
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
