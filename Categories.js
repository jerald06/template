import React from 'react'
import { Box, Stack, styled, Typography } from '@mui/material'
import Kids from '../images/Kids.jpg'
import Men from '../images/Men.jpg'
import Women from '../images/Women.jpg'



const StyledBox = styled( Box )( {
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
} );
const StyledTypography = styled( Typography )( {
    margin: '25% 50px 25% 50px',
    background: 'white',

    opacity: '0.8'
} )

const Categories = () =>
{
    return (
        <Box>
            <Stack direction={ { xs: "column", sm: "row" } } spacing={ { xs: 1, sm: 2, md: 4 } } mt={ 5 } sx={ { fill: "currentcolor" } }>
                <StyledBox sx={ { backgroundImage: `url(${ Kids })` } }><StyledTypography align='center' variant='h3'>Kids</StyledTypography></StyledBox>
                <StyledBox sx={ { backgroundImage: `url(${ Men })` } }><StyledTypography align='center' variant='h3'>Men</StyledTypography></StyledBox>
                <StyledBox sx={ { backgroundImage: `url(${ Women })` } }><StyledTypography align='center' variant='h3'>Women</StyledTypography></StyledBox>
            </Stack>
        </Box>
    )
}

export default Categories
