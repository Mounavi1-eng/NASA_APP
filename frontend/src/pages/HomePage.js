import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia,
  Grid,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Explore the Universe with NASA APIs
        </Typography>
        
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary" 
          paragraph
          sx={{ mb: 6 }}
        >
          Discover amazing space imagery and asteroid data from NASA's open APIs
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image={`${process.env.PUBLIC_URL}/logo192.png`}
                alt="Astronomy Picture of the Day"
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Astronomy Picture of the Day
                </Typography>
                <Typography>
                  Each day NASA features a different image of our fascinating universe.
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button 
                  component={Link} 
                  to="/apod" 
                  variant="contained" 
                  fullWidth
                >
                  View APOD
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image={`${process.env.PUBLIC_URL}/logo_512.png`}
                alt="Near Earth Objects"
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Near Earth Objects
                </Typography>
                <Typography>
                  Browse asteroids approaching Earth and check if they're potentially hazardous.
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button 
                  component={Link} 
                  to="/neo" 
                  variant="contained" 
                  fullWidth
                >
                  View NEOs
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;