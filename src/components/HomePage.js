import React from "react";
import { Container, Typography, Button, Grid2, Card, CardContent, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import technologyImg from "../assets/images/istockphoto-1202693974-1024x1024.jpg";
import messagingImg from "../assets/images/istockphoto-1128284796-1024x1024.jpg";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import ChatIcon from "@mui/icons-material/Chat";



const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 5 }}>
      {/* Hero Section */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Empowering Businesses with Technology, Training & Messaging Solutions
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Innovate. Train. Communicate. Scale your business with future-ready solutions.
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
        Get Started
      </Button>

      {/* Services Section */}
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 6, mb: 3 }}>
        Our Services
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {[
          {
            title: "Technology Solutions", description: "Custom software, AI & automation.", image: technologyImg,
            icon: <ComputerIcon fontSize="large" color="primary" />
          },
          {
            title: "Training & Upskilling", description: "Corporate IT training & skill development.",
            image: technologyImg, icon: <SchoolIcon fontSize="large" color="primary" />
          },
          {
            title: "Messaging Tech", description: "WhatsApp API, SMS & chatbots.", image: technologyImg,
            icon: <ChatIcon fontSize="large" color="primary" />
          },
        ].map((service, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: "center", height: "100%", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", p: 3 }}>
              {/* <CardMedia component="img" height="160" image={service.image} alt={service.title} /> */}
              <CardMedia sx={{ mb: 2 }}>{service.icon}</CardMedia>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography color="textSecondary">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Why Choose Us Section */}
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 6, mb: 3 }}>
        Why Choose Us?
      </Typography>
      <Grid2 container spacing={3} justifyContent="center">
        {["Innovative & Scalable Solutions", "Industry-Driven Training", "Seamless Communication Tech", "Customer-Centric Approach"].map((reason, index) => (
          <Grid2 item xs={12} sm={6} key={index}>
            <Typography variant="h6" color="primary">
              ✔ {reason}
            </Typography>
          </Grid2>
        ))}
      </Grid2>

      {/* Testimonials Section */}
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 6, mb: 3 }}>
        What Our Clients Say
      </Typography>
      <Carousel showArrows={true} infiniteLoop autoPlay>
        {["Great service and support!", "Helped us scale our business.", "Highly recommended for messaging solutions!"].map((testimonial, index) => (
          <div key={index}>
            <Typography variant="h6" color="textSecondary" sx={{ py: 2 }}>
              "{testimonial}"
            </Typography>
          </div>
        ))}
      </Carousel>

      {/* Call to Action */}
      <Button variant="contained" color="success" size="large" startIcon={<WhatsAppIcon />} sx={{ mt: 5 }}>
        Contact Us on WhatsApp
      </Button>
    </Container>
  );
};

export default HomePage;
