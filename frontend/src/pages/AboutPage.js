import React from 'react';
import { 
  Box, 
  Typography, 
  Link, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Chip,
  Container
} from '@mui/material';
import { 
  Code, 
  Public, 
  Api, 
  GitHub,
  Science,
  Satellite
} from '@mui/icons-material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
        About NASA API Explorer
      </Typography>
      
      <Typography variant="body1" paragraph>
        This application provides interactive access to NASA's open APIs to explore space-related data.
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Features
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Satellite color="primary" />
            </ListItemIcon>
            <ListItemText primary="Astronomy Picture of the Day (APOD) viewer with date selection" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Science color="primary" />
            </ListItemIcon>
            <ListItemText primary="Near Earth Objects (NEO) tracker with hazard detection" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Public color="primary" />
            </ListItemIcon>
            <ListItemText primary="Responsive design that works on all devices" />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Technologies Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip icon={<Code />} label="React" />
          <Chip icon={<Code />} label="Material-UI" />
          <Chip icon={<Api />} label="NASA APIs" />
          <Chip icon={<Code />} label="Node.js/Express" />
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" paragraph>
        All data is provided by NASA's API services at{' '}
        <Link href="https://api.nasa.gov/" target="_blank" rel="noopener">
          api.nasa.gov
        </Link>.
      </Typography>

      
    </Container>
  );
};

export default AboutPage;