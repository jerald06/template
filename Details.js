import React from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
import post from '../images/post.jpg'
import { Container, Stack } from '@mui/system'
import Rightbar from './Rightbar'
const Details = () =>
{
    return (
        <Box>
            <Box sx={ {
                backgroundImage: `url(${ post })`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                height: "250px",
            } }
            >
                <Typography
                    align="center"
                    color={ "black" }
                    variant="h2"
                    sx={ { fontWeight: 900, padding: 10 } }
                >
                    Clicked Post Title
                </Typography>
            </Box>

            <Container>
                <hr />
                <Stack
                    direction={ { xs: "column", md: "row" } }
                    sapcing={ { xs: 1, sm: 2, md: 8 } }
                    mt={ 8 }
                >
                    <Box flex={ 3 } sx={ { padding: "18px 100px 100px 100px" } }>
                        <Typography
                            m={ 4 }
                            align="center"
                            color={ "gray" }
                            variant="body1"
                            sx={ { fontWeight: 900 } }
                        >
                            Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.



                        </Typography>
                        <CardMedia
                            component="img"
                            height="300px"
                            image={ post }
                            alt="green iguana"
                        />
                        <Typography align="center" variant="h4" mt={ 2 }>
                            Wait for ir Wait
                        </Typography>
                        <Typography
                            m={ 4 }
                            color={ "gray" }
                            variant="body1"
                            sx={ { fontWeight: 900 } }
                        >
                            Online Shopping for Men - Browse & buy from a wide range of men's clothing, menswear & accessories online at best prices ✯Fast Shipping ✯Amazing Offers.
                            Clothing Mens BootsMens Analog Watches · Mens Chronograph Watches
                            Online Shopping for Men - Browse & buy from a wide range of men's clothing, menswear & accessories online at best prices ✯Fast Shipping ✯Amazing Offers.
                            Clothing · mens Boots · Mens Analog Watches · Mens Chronograph Watches
                        </Typography>
                    </Box>
                    <Box flex={ 1 }>
                        <Rightbar />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Details
