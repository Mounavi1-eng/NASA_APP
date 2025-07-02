import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Card,
  CardMedia,
  CardContent,
  Container,
} from '@mui/material';
import axios from 'axios';

const APODPage = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAPOD = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('/api/apod'); // fetch today's picture
      setApod(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch APOD data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPOD();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        NASA Astronomy Picture of the Day
      </Typography>

      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation by a professional astronomer.
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ my: 4 }}>
          {error}
        </Alert>
      )}

      {apod && (
        <Card sx={{ my: 4 }}>
          {apod.media_type === 'image' && (
            <CardMedia
              component="img"
              height="450"
              image={apod.url}
              alt={apod.title}
              sx={{ objectFit: 'cover' }}
            />
          )}

          <CardContent>
            <Typography variant="h5" gutterBottom>
              {apod.title || 'Untitled'}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {apod.date}
            </Typography>

            <Typography variant="body1">
              {apod.explanation || 'No description available.'}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default APODPage;
