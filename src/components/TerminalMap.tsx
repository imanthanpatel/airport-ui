import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Tooltip,
  IconButton,
  useTheme,
} from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WcIcon from '@mui/icons-material/Wc';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface Terminal {
  id: string;
  name: string;
  gates: string[];
  amenities: {
    restaurants: number;
    bathrooms: number;
    cafes: number;
    shops: number;
  };
}

const terminals: Terminal[] = [
  {
    id: 'A',
    name: 'Terminal A',
    gates: ['A1', 'A2', 'A3', 'A4', 'A5'],
    amenities: {
      restaurants: 3,
      bathrooms: 4,
      cafes: 2,
      shops: 5,
    },
  },
  {
    id: 'B',
    name: 'Terminal B',
    gates: ['B1', 'B2', 'B3', 'B4'],
    amenities: {
      restaurants: 2,
      bathrooms: 3,
      cafes: 2,
      shops: 3,
    },
  },
  {
    id: 'C',
    name: 'Terminal C',
    gates: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
    amenities: {
      restaurants: 4,
      bathrooms: 5,
      cafes: 3,
      shops: 6,
    },
  },
];

const TerminalMap: React.FC = () => {
  const theme = useTheme();

  const renderAmenities = (amenities: Terminal['amenities']) => (
    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
      <Tooltip title={`${amenities.restaurants} Restaurants`}>
        <IconButton size="small">
          <RestaurantIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={`${amenities.bathrooms} Bathrooms`}>
        <IconButton size="small">
          <WcIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={`${amenities.cafes} Cafes`}>
        <IconButton size="small">
          <LocalCafeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={`${amenities.shops} Shops`}>
        <IconButton size="small">
          <ShoppingBagIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Terminal Map
      </Typography>
      <Grid container spacing={3}>
        {terminals.map((terminal) => (
          <Grid item xs={12} md={4} key={terminal.id}>
            <Paper
              sx={{
                p: 2,
                height: '100%',
                backgroundColor: theme.palette.grey[50],
                '&:hover': {
                  backgroundColor: theme.palette.grey[100],
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <Typography variant="h5" gutterBottom color="primary">
                {terminal.name}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {terminal.gates.map((gate) => (
                  <Tooltip key={gate} title={`Gate ${gate}`}>
                    <Paper
                      sx={{
                        p: 1,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      <FlightIcon sx={{ mr: 0.5, fontSize: 16 }} />
                      <Typography variant="body2">{gate}</Typography>
                    </Paper>
                  </Tooltip>
                ))}
              </Box>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Amenities
              </Typography>
              {renderAmenities(terminal.amenities)}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TerminalMap; 