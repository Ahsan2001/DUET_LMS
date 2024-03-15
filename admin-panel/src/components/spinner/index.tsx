import CircularProgress from '@mui/material/CircularProgress';

export function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }} >
      <CircularProgress size={27} color="inherit"  />
    </div>
  );
};
