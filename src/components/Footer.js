// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center">
                    &copy; 2025 Tech Company. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
