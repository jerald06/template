import React from 'react'
import card1 from '../images/card1.jpg'
import { Box, CardMedia, CardContent, Typography, Link } from '@mui/material'

const Card = () =>
{
    return (
        <Box>
            <Link href="http://localhost:3000/details" sx={ { textDecoration: "none" } }>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={ card1 }
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" align="center" component="div" color="tomato">
                        PERFUMES
                    </Typography>
                    <Typography gutterBottom variant="h5" align="center" component="div" >
                        Wearing this will make everyone love you
                    </Typography>
                    <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondary" >
                        it's womens love
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default Card
