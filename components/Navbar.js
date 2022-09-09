import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


// image
import logo from '../public/logo.jpg'

// context for light and dark mode
import { ColorModeContext } from "../theme/MUI_MODE";

// mui
import {
    AppBar, Badge, Box, Button, Drawer,
    IconButton, List, ListItem, ListItemButton,
    Paper, Tooltip, Typography, useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Navbar = () => {

    const { mode, toggleMode } = useContext(ColorModeContext)

    const [menu, setMenu] = React.useState();

    const isTablet = useMediaQuery('(max-width:900px)')


    const state = useSelector(state => state)
    const [hasWindow, setHasWindow] = React.useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true)
        }
    }, [])


    return (
        <Box maxWidth='1152px' m='auto' py={`${isTablet ? '5px' : '10px'}`} sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
                <Paper variant="outlined"
                    sx={{
                        boxShadow: 'none', borderRadius: '0', border: 'none',
                        display: 'flex', alignItems: 'center'
                    }}>


                    {/* responsive menu */}
                    {isTablet &&
                        <Box sx={{ flexGrow: 1 }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setMenu(true)}
                            >
                                <MenuIcon sx={{ fontSize: '30px' }} />
                            </IconButton>

                            <Drawer
                                anchor='left'
                                open={menu}
                                onClose={() => setMenu(false)}
                            >
                                <Box
                                    sx={{ width: 250 }}
                                    role="presentation"
                                    onClick={() => setMenu(false)}
                                    onKeyDown={() => setMenu(false)}
                                >
                                    <List>
                                        <ListItem disablePadding
                                            sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', px: '20px', mt: '50px' }}
                                        >

                                            <Link href='/'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <HomeIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Home
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/products'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <LocalMallIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Products
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/signUp'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <AccountCircleIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Profile
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/aboutUs'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <InfoIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        About us
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/contactUs'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <ContactSupportIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Contact Us
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>



                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    }

                    {/* laptap menu */}
                    {!isTablet &&
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>

                            <Image src={logo} alt='logo_Image' width={70} height={60} />

                            <Link href='/'>
                                <Button variant="text">
                                    Home
                                </Button>
                            </Link>

                            <Link href='/products'>
                                <Button variant="text">
                                    Products
                                </Button>
                            </Link>

                            <Link href='/aboutUs'>
                                <Button variant="text">
                                    About us
                                </Button>
                            </Link>

                            <Link href='/contactUs'>
                                <Button variant="text">
                                    Contact Us
                                </Button>
                            </Link>

                        </Box>
                    }

                    {/* Light / Dark */}
                    <Tooltip title='Mode'>
                        <IconButton onClick={toggleMode} color='primary'>
                            {mode === 'light' ? <ModeNightIcon sx={{ fontSize: '25px' }} /> :
                                <LightModeIcon sx={{ color: '#fca311', fontSize: '25px' }} />}
                        </IconButton>
                    </Tooltip>

                    {/* Cart */}
                    <Link href='/cart'>
                        <Tooltip title='cart'>
                            <IconButton sx={{ px: '12px' }}>
                                <Badge badgeContent={hasWindow && state.itemsCounter} color="error">
                                    <ShoppingBasketIcon color="primary" sx={{ fontSize: '25px' }} />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Link>

                    {/* Person Account */}
                    {!isTablet &&
                        <Link href='/signUp'>
                            <Tooltip title='Profile'>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircleIcon sx={{ fontSize: '25px' }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    }

                </Paper>
            </AppBar>
        </Box>
    );
}

export default Navbar;