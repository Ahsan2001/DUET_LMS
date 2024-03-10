import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }} >
      <CircularProgress size={27} color="inherit"  />
    </div>
  );
};
