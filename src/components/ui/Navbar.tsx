import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { FlexBetween } from '..';
import { useState } from 'react';

export const Navbar = () => {
  const [selected, setSelected] = useState('dashboard');
  const { palette } = useTheme();
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        {/* Icon */}
        <DashboardIcon
          sx={{ fontSize: '28px' }}
          style={{ color: palette.primary[500] }}
        />

        <Typography variant="h4" fontSize="16px">
          Dashboard
        </Typography>
      </FlexBetween>
      {/* Links */}
      <FlexBetween gap="2rem">
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700]
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to="/proyecciones"
            onClick={() => setSelected('proyecciones')}
            style={{
              color: selected === 'proyecciones' ? 'inherit' : palette.grey[700]
            }}
          >
            Proyecciones
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};
