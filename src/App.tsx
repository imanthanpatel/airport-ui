import React, { useState, useMemo } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import GateFilter from './components/GateFilter';
import GateList from './components/GateList';
import { Gate, Filter } from './types/types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0277bd',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

// Sample data - in a real app, this would come from an API
const sampleGates: Gate[] = [
  {
    id: '1',
    number: 'A1',
    terminal: 'A',
    status: 'available',
    walkingTime: 5,
    nextFlight: 'FL123 to Paris',
  },
  {
    id: '2',
    number: 'A2',
    terminal: 'A',
    status: 'occupied',
    walkingTime: 7,
    nextFlight: 'FL456 to London',
  },
  {
    id: '3',
    number: 'B1',
    terminal: 'B',
    status: 'maintenance',
    walkingTime: 10,
  },
  {
    id: '4',
    number: 'B2',
    terminal: 'B',
    status: 'available',
    walkingTime: 12,
    nextFlight: 'FL789 to Tokyo',
  },
  {
    id: '5',
    number: 'C1',
    terminal: 'C',
    status: 'occupied',
    walkingTime: 15,
    nextFlight: 'FL321 to New York',
  },
  {
    id: '6',
    number: 'C2',
    terminal: 'C',
    status: 'available',
    walkingTime: 18,
    nextFlight: 'FL654 to Dubai',
  },
];

function App() {
  const [filter, setFilter] = useState<Filter>({
    terminal: '',
    status: '',
    searchQuery: '',
  });

  const filteredGates = useMemo(() => {
    return sampleGates.filter((gate) => {
      const matchesTerminal = !filter.terminal || gate.terminal === filter.terminal;
      const matchesStatus = !filter.status || gate.status === filter.status;
      const matchesSearch = !filter.searchQuery || 
        gate.number.toLowerCase().includes(filter.searchQuery.toLowerCase()) ||
        (gate.nextFlight && gate.nextFlight.toLowerCase().includes(filter.searchQuery.toLowerCase()));
      
      return matchesTerminal && matchesStatus && matchesSearch;
    });
  }, [filter]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{ py: 4 }}>
        <GateFilter filter={filter} onFilterChange={setFilter} />
        <GateList gates={filteredGates} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
