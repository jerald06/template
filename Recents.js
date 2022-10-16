import React from 'react'
import Card from '../components/Card'
import card1 from '../images/card1.jpg'
import post from '../images/post.jpg'
import post1 from '../images/post1.jpg'
import post2 from '../images/post2.jpg'
import post3 from '../images/post3.jpg'
import { Box, Grid } from '@mui/material'

const Recents = () =>
{
    return (
        <Box>
            <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 1 } }>
                <Grid item>
                    <Card card1={ card1 } />
                </Grid>

                <Grid item md={ 6 } xs={ 12 } >
                    <Card card1={ post1 } />
                </Grid>
                <Grid item md={ 6 } xs={ 12 } >
                    <Card card1={ post2 } />
                </Grid>
                <Grid item md={ 6 } xs={ 12 } >
                    <Card card1={ post3 } />
                </Grid>
                <Grid item md={ 6 } xs={ 12 } >
                    <Card card1={ post } />
                </Grid>


            </Grid>
        </Box>
    )
}

export default Recents
