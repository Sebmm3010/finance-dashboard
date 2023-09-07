import { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from '@/themes';
import { Navbar } from '@/components';
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<div>Dashborad page</div>} />
              <Route
                path="/proyecciones"
                element={<div>Projections page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;