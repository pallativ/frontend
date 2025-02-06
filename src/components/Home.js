// src/components/AboutUs.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" gutterBottom>
                    Home Page.
                </Typography>
                <Typography variant="body1">
                   Servies.
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
