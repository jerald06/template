import { Facebook, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, InputBase, Menu } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Navbar = () =>
{
    const StyledToolbar = styled( Toolbar )( {
        display: "flex",
        justifyContent: "space-between",
    } )
    const SocialBox = styled( Box )( {
        display: "flex",
        gap: 10,
    } )
    const MenuBox = styled( Box )( {
        display: "flex",
        gap: 30,
    } )
    const SearchBox = styled( Box )( {
        display: "flex",
        gap: 5,
    } )
    const MenuItems = [
        { Name: "Home", Link: "/" },
        { Name: "Products", Link: "#" },
        { Name: "Portfolio", Link: "#" },
        { Name: "Blog", Link: "#" },
        { Name: "Contact Us", Link: "#" }
    ]
    const [ open, setOpen ] = useState( false );
    return (
        <div>
            <AppBar sx={ { background: "black" } } position={ "static" }>
                <StyledToolbar>
                    <SocialBox>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                    </SocialBox>
                    <MenuBox sx={ { display: { xs: "none", sm: "none", md: "flex" } } }>
                        { MenuItems.map( ( item ) => (
                            <Typography sx={ { cursor: "pointer", fontSize: "14px" } }>{ item.Name }</Typography>
                        ) ) }
                    </MenuBox>
                    <SearchBox><InputBase placeholder="Search..." sx={ { color: 'white' } } /></SearchBox>
                    <MenuIcon sx={ { color: "white", display: { xs: "block", sm: "block", md: "none" } } }
                        onClick={ () => setOpen( !open ) }
                    />
                </StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"

                    open={ open }
                    onClose={ () => setOpen( !open ) }
                    anchorOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    } }
                    transformOrigin={ {
                        vertical: 'top',
                        horizontal: 'left',
                    } }
                >
                    <Box sx={ { width: 350, height: "90vh" } }>
                        { MenuItems.map( ( item ) => (

                            <Typography sx={ { cursor: "pointer", fontSize: "14px" } }>{ item.Name }</Typography>
                        ) ) }
                    </Box>


                </Menu>
            </AppBar>
        </div>
    )
}

export default Navbar
