// frontend/101435982_comp3123_assignment2_reactjs/src/components/Home.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" style={{ paddingTop: '50px' }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        textAlign="center"
        sx={{ mb: 4 }}
      >
        <Typography variant="h3" component="h1" color="primary" gutterBottom>
          Welcome to Employee Management
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Manage employee records with ease. Add, update, view, and delete employee data in one place.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="/login" 
          sx={{ marginTop: 2 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
