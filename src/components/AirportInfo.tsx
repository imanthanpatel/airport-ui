import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HotelIcon from '@mui/icons-material/Hotel';
import SecurityIcon from '@mui/icons-material/Security';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsIcon from '@mui/icons-material/Directions';

const AirportInfo: React.FC = () => {
  const sections = [
    {
      title: 'Operating Hours & Contact',
      content: (
        <List>
          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="24/7 Operations"
              secondary="Terminal services may vary during night hours (11 PM - 5 AM)"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="General Inquiries"
              secondary="+1 (555) 123-4567"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Email Support"
              secondary="info@airportnavigation.com"
            />
          </ListItem>
        </List>
      ),
    },
    {
      title: 'Transportation & Parking',
      content: (
        <List>
          <ListItem>
            <ListItemIcon>
              <LocalParkingIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Parking Options"
              secondary={
                <Box sx={{ mt: 1 }}>
                  <Chip label="Short-term: $2/hour" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Long-term: $15/day" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Valet: $25/day" sx={{ mb: 1 }} />
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AirportShuttleIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Ground Transportation"
              secondary={
                <>
                  <Typography variant="body2">• Free shuttle service between terminals</Typography>
                  <Typography variant="body2">• Bus service to downtown every 30 mins</Typography>
                  <Typography variant="body2">• Taxi and ride-share pickup zones at each terminal</Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DirectionsIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Directions"
              secondary="Located at 123 Airport Drive, accessible via Highway 101"
            />
          </ListItem>
        </List>
      ),
    },
    {
      title: 'Facilities & Services',
      content: (
        <List>
          <ListItem>
            <ListItemIcon>
              <WifiIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Free Wi-Fi"
              secondary="Available throughout all terminals"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RestaurantIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Dining Options"
              secondary={
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2">• 24/7 cafes in each terminal</Typography>
                  <Typography variant="body2">• Local and international cuisine</Typography>
                  <Typography variant="body2">• Premium lounges with buffet service</Typography>
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ShoppingBagIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Shopping"
              secondary="Duty-free shops, convenience stores, and luxury boutiques"
            />
          </ListItem>
        </List>
      ),
    },
    {
      title: 'Additional Services',
      content: (
        <List>
          <ListItem>
            <ListItemIcon>
              <SecurityIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Security Information"
              secondary={
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2">• TSA PreCheck available</Typography>
                  <Typography variant="body2">• Clear security lanes</Typography>
                  <Typography variant="body2">• 24/7 airport police presence</Typography>
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HotelIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Airport Hotels"
              secondary={
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2">• On-site hotel with direct terminal access</Typography>
                  <Typography variant="body2">• Multiple hotels within 5-minute shuttle ride</Typography>
                </Box>
              }
            />
          </ListItem>
        </List>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Airport Navigation
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Welcome to our airport. Find all the essential information you need for a smooth travel experience.
      </Typography>
      <Divider sx={{ my: 3 }} />
      
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: (theme) => theme.palette.grey[50],
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.grey[100],
                  },
                }}
              >
                <Typography variant="h6">{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {section.content}
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ mt: 3, p: 2, backgroundColor: (theme) => theme.palette.grey[50] }}>
        <Typography variant="subtitle1" gutterBottom>
          Need more information?
        </Typography>
        <Typography variant="body2">
          Visit our{' '}
          <Link href="#" color="primary">
            FAQ page
          </Link>
          {' '}or contact our{' '}
          <Link href="#" color="primary">
            customer service
          </Link>
          .
        </Typography>
      </Paper>
    </Box>
  );
};

export default AirportInfo; 