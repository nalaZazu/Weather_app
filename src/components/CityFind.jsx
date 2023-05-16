import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import cloud from "./icon/perfect-day.svg"
import Button from '@mui/material/Button';
function CityFind({ setUpdateCity, fetchWeather }) {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Grid item xs={8}>
                    <Box sx={{ minWidth: 250, m: 5 }}>
                        <Card variant="outlined" style={{ boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)" }}>
                            <React.Fragment>
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ textAlign: 'center' ,fontWeight:"700"}}>
                                        React Weather App
                                    </Typography>
                                    <Box sx={{ width: '150px', margin: '50px 0 0 150px' }}>
                                        <CardMedia
                                            component="img"
                                            image={cloud}
                                            alt="green iguana"
                                            sx={{ width: '150px' }} />
                                    </Box>
                                    <Typography variant='h5' sx={{ textAlign: 'center', m: 3, fontWeight: "700" }}>
                                        Find Your Weather
                                    </Typography>
                                </CardContent>
                                <Box
                                    sx={{
                                        width: 300,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        margin: '12px auto 50px auto',
                                    }}>
                                    <form onSubmit={fetchWeather}>
                                        <input placeholder='city' style={{ padding: '9px' }}
                                            onChange={(e) =>
                                                setUpdateCity(e.target.value)} />
                                        <Button type="submit" sx={{
                                            backgroundColor: 'black', color: "white", '&:hover': {
                                                backgroundColor: 'black',
                                                color: 'white',
                                            }
                                        }}>
                                            search
                                        </Button>
                                    </form>
                                </Box>
                            </React.Fragment >
                        </Card>
                    </Box>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
export default CityFind