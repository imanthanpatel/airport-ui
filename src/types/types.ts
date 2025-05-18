export interface Gate {
  id: string;
  number: string;
  terminal: string;
  status: 'available' | 'occupied' | 'maintenance';
  nextFlight?: string;
  walkingTime: number;
}

export interface Terminal {
  id: string;
  name: string;
  gates: Gate[];
}

export interface Filter {
  terminal: string;
  status: string;
  searchQuery: string;
} 