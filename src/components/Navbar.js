import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          RBAC Admin Dashboard
        </Typography>
        <Box>
          <Button color="inherit">User Management</Button>
          <Button color="inherit">Role Management</Button>
          <Button color="inherit">Permission Management</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
