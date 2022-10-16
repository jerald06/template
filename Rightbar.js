import React from 'react'
import post from '../images/post.jpg'
import post1 from '../images/post1.jpg'
import post2 from '../images/post2.jpg'
import post3 from '../images/post3.jpg'
import Card from '../components/Card'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Box, Typography, Divider } from '@mui/material'
const Rightbar = () =>
{
    return (
        <Box>
            <Typography align="center" bgcolor={ 'black' } color="white">
                Most popular
            </Typography>
            <List sx={ { width: '100%', height: "100%", maxWidth: 360, bgcolor: 'background.paper' } }>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={ { height: 80, width: 80 } } variant="square" alt="Remy Sharp" src={ post } />
                    </ListItemAvatar>
                    <ListItemText

                        secondary=

                        { " — I'll be in your neighborhood doing errands this…" }


                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={ { height: 80, width: 80 } } variant="square" alt="Remy Sharp" src={ post1 } />
                    </ListItemAvatar>
                    <ListItemText

                        secondary=

                        { " — I'll be in your neighborhood doing errands this…" }


                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={ { height: 80, width: 80 } } variant="square" alt="Remy Sharp" src={ post2 } />
                    </ListItemAvatar>
                    <ListItemText

                        secondary=

                        { " — I'll be in your neighborhood doing errands this…" }


                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={ { height: 80, width: 80 } } variant="square" alt="Remy Sharp" src={ post3 } />
                    </ListItemAvatar>
                    <ListItemText

                        secondary=

                        { " — I'll be in your neighborhood doing errands this…" }


                    />
                </ListItem>
                <Divider variant="inset" component={ 'li' } />
            </List>
            <Typography align="center" bgcolor={ 'black' } color="white">
                About Us
            </Typography>
            <Card cardImage={ post1 } />
        </Box>
    )
}

export default Rightbar
