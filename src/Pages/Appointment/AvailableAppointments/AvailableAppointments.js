import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [

    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: "08.00 AM - 09.00 AM",
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: "10.05 AM - 11.30 AM",
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: "5.00 PM - 06.30 PM",
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: "7.00 AM - 08.30 AM",
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: "7.00 AM - 08.30 AM",
        space: 10
    },
    {
        id: 6,
        name: 'Cavity Protection',
        time: "7.00 AM - 08.30 AM",
        space: 10
    }


];

const AvailableAppointments = ({ date }) => {


    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }} > Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2} >

                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        booking={booking}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointments;