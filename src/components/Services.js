// src/components/Services.js
import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const Services = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" gutterBottom>
                    Our Services
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h5">Custom Software Development</Typography>
                            <Typography variant="body1">We develop tailored software solutions that meet the unique needs of your business.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h5">AI & Machine Learning</Typography>
                            <Typography variant="body1">Leveraging AI and ML to solve complex problems and optimize business processes.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h5">Cloud Solutions</Typography>
                            <Typography variant="body1">Providing scalable and secure cloud infrastructure for your business.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;
