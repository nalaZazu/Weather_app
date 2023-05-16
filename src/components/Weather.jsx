import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import cloud from "./icon/rain-night.svg"
import sun from "./icon/temp.svg"
import humidity from "./icon/humidity.svg"
import wind from "./icon/wind.svg"
import pressure from "./icon/pressure.svg"
function Weather({ weather }) {
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Grid item xs={8}>
                    <Box sx={{ minWidth: 250, m: 5 }}>
                        <Card variant="outlined" style={{ boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)" }}>
                            <React.Fragment>
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: "700" }}>
                                        React Weather App
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", marginTop: '30px' }}>
                                        <span style={{ fontSize: '28px' }}>
                                            {`${Math.floor(weather?.main?.temp - 273)}°C`}
                                        </span>
                                        <CardMedia
                                            component="img"
                                            image={cloud}
                                            alt="green iguana"
                                            sx={{ width: '100px' }} />
                                    </Box>
                                    <Typography variant='h5' sx={{ textAlign: 'center', m: 3 }}>
                                        {`${weather.name}`}
                                    </Typography>
                                    <Typography varient='h5' style={{ fontWeight: "500" }}>Weather info</Typography>
                                </CardContent>

                                <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center" }}>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={sun} alt="sun_image" />
                                        <span>
                                            {`${getTime(weather?.sys?.sunset)}`}
                                            <Typography>
                                                SunSet
                                            </Typography>
                                        </span>
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={humidity} alt="sun_image" />
                                        <span>
                                            {weather?.main?.humidity}
                                            <Typography>humidity</Typography>
                                        </span>
                                    </span>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", margin: '25px 0 30px 0' }}>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={wind} alt="sun_image" />
                                        <span>
                                            {weather?.wind?.speed}
                                            <Typography>Wind</Typography>
                                        </span> </span>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={pressure} alt="sun_image" />
                                        <span>
                                            {weather?.main?.pressure}
                                            <Typography>pressure</Typography>
                                        </span>
                                    </span>
                                </Box>
                            </React.Fragment>
                        </Card>
                    </Box>
                </Grid>
            </Container>
        </React.Fragment >
    )
}
export default Weather