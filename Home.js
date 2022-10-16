import React from 'react'
import { Box, Stack, Container } from '@mui/material'
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Recents from '../components/Recents';
import Rightbar from '../components/Rightbar'


const Home = () =>
{
    return (
        <Box>
            <Hero />
            <Container>
                <Categories />
                <hr />
                <Stack direction={ 'row' } spacing={ 8 } mt={ 8 }>
                    <Box flex={ 3 } sx={ { padding: "18px 100px 100px 100px" } }>
                        <Recents />
                    </Box>
                    <Box flex={ 1 }><Rightbar /></Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Home
