// src/components/AboutUs.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1">
                    We are a leading tech company specializing in cutting-edge solutions, offering a range of services to help businesses thrive in the digital world.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;
