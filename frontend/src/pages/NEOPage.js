import React, { useState, useEffect, useRef } from 'react';
import {
  Box, Typography, TextField, Button, Grid,
  CircularProgress, Alert, Paper, Table,
  TableBody, TableCell, TableContainer,
  TableHead, TableRow, Chip
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';
import axios from 'axios';

const NEOPage = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [neoData, setNeoData] = useState(null);
  const [error, setError] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);

  const hasFetchedOnce = useRef(false);

  const fetchNEO = async () => {
    setLocalLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        start_date: format(startDate, 'yyyy-MM-dd'),
        end_date: format(endDate, 'yyyy-MM-dd'),
      });

      const response = await axios.get(`${process.env.REACT_APP_API_BASE}/api/neo?${params.toString()}`);
      setNeoData(response.data.near_earth_objects);
    } catch (err) {
      console.error('Error fetching NEO:', err.message);
      setError('Failed to fetch NEO data.');
    } finally {
      setLocalLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedOnce.current) {
      hasFetchedOnce.current = true;
      fetchNEO();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNEO();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Near Earth Objects (NEO) Tracker
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
This page displays data from NASA’s Near Earth Object Web Service, showing asteroids and comets that are approaching Earth today, along with their detailed approach information.      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth margin="normal" />
                  )}
                  maxDate={endDate}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth margin="normal" />
                  )}
                  minDate={startDate}
                  maxDate={today}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Fetch NEO Data
          </Button>
        </form>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {localLoading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {neoData && (
        <Box>
          {Object.entries(neoData).map(([date, neos]) => (
            <Box key={date} sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {date}
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Diameter (m)</TableCell>
                      <TableCell>Close Approach</TableCell>
                      <TableCell>Velocity (km/s)</TableCell>
                      <TableCell>Miss Distance (km)</TableCell>
                      <TableCell>Hazardous</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {neos.map((neo) => (
                      <TableRow key={neo.id}>
                        <TableCell>{neo.name}</TableCell>
                        <TableCell>
                          {Math.round(
                            (neo.estimated_diameter.meters.estimated_diameter_min +
                              neo.estimated_diameter.meters.estimated_diameter_max) / 2
                          )}
                        </TableCell>
                        <TableCell>
                          {neo.close_approach_data[0]?.close_approach_date_full}
                        </TableCell>
                        <TableCell>
                          {parseFloat(
                            neo.close_approach_data[0]?.relative_velocity.kilometers_per_second
                          ).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          {parseFloat(
                            neo.close_approach_data[0]?.miss_distance.kilometers
                          ).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {neo.is_potentially_hazardous_asteroid ? (
                            <Chip label="Yes" color="error" size="small" />
                          ) : (
                            <Chip label="No" color="success" size="small" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NEOPage;
