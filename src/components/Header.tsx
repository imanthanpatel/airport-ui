import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
      <Toolbar>
        <FlightTakeoffIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Airport Navigation
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="body1">Terminal Map</Typography>
          <Typography variant="body1">Gate Status</Typography>
          <Typography variant="body1">Information</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 