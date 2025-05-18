import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { Gate } from '../types/types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface GateListProps {
  gates: Gate[];
}

const getStatusColor = (status: Gate['status']) => {
  switch (status) {
    case 'available':
      return 'success';
    case 'occupied':
      return 'error';
    case 'maintenance':
      return 'warning';
    default:
      return 'default';
  }
};

const GateList: React.FC<GateListProps> = ({ gates }) => {
  return (
    <Grid container spacing={2}>
      {gates.map((gate) => (
        <Grid item xs={12} sm={6} md={4} key={gate.id}>
          <Card 
            sx={{ 
              height: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
                cursor: 'pointer',
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  Gate {gate.number}
                </Typography>
                <Chip
                  label={gate.status.charAt(0).toUpperCase() + gate.status.slice(1)}
                  color={getStatusColor(gate.status)}
                  size="small"
                />
              </Box>
              <Typography color="textSecondary" gutterBottom>
                Terminal {gate.terminal}
              </Typography>
              {gate.nextFlight && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Next Flight: {gate.nextFlight}
                </Typography>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography variant="body2" color="textSecondary">
                  {gate.walkingTime} min walk
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GateList; 