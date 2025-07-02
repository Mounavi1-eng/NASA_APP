import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ 
  message = 'Loading NASA data...',
  size = 60,
  thickness = 4,
  color = 'primary'
}) => {
  return (
    <Box 
      display="flex" 
      flexDirection="column"
      alignItems="center" 
      justifyContent="center" 
      minHeight="200px"
      sx={{
        // NASA-themed styling
        background: 'transparent',
        borderRadius: 2,
        p: 4
      }}
    >
      <CircularProgress 
        size={size} 
        thickness={thickness}
        color={color}
        sx={{
          animationDuration: '1.5s',  // Slower rotation for space theme
          '&.MuiCircularProgress-root': {
            color: '#0B3D91'  // NASA blue
          }
        }}
      />
      {message && (
        <Typography 
          variant="body1" 
          sx={{ 
            mt: 2,
            color: 'text.secondary',
            fontFamily: '"Orbitron", sans-serif'  // Space-themed font
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

// PropTypes for better development experience
LoadingSpinner.propTypes = {
  message: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit'])
};

export default LoadingSpinner;