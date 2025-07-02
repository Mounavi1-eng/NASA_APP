import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import APODPage from './pages/APODPage';
import NEOPage from './pages/NEOPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage setLoading={setLoading} />} />
              <Route path="/apod" element={<APODPage setLoading={setLoading} />} />
              <Route path="/neo" element={<NEOPage setLoading={setLoading} />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          )}
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;