// src/components/Contact.js
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
    };

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Your Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </Container>
    );
};

export default Contact;
