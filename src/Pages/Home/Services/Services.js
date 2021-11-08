import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [

    {
        name: "Fluoride Treatment",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
             <Typography variant="h6"  sx={{fontWeight: 500, m:5,color: 'success.main' }} component="div">
                        Our Services
                    </Typography>
             <Typography variant="h4"   sx={{fontWeight: 600, m:2 }} component="div">
                        Services We Provide
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                    services.map((service, index) => <Service
                    key={service.name}
                    service={service}
                    ></Service>)
                    
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;