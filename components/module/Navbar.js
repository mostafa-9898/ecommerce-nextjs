import Link from "next/link";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// context for light and dark mode
import { ColorModeContext } from "../../theme/MUI_MODE";

// elemets
import Logo from "../elements/Logo";

// icons
import {
    HiOutlineSun, HiOutlineShoppingBag, HiOutlineTag, HiOutlineUser,
    HiOutlineMoon, HiOutlineAnnotation, HiOutlineHome,
    HiOutlineInformationCircle, HiOutlineMenuAlt2,
} from 'react-icons/hi';

// mui
import {
    Badge, Box, Tooltip, IconButton, Typography,
    Drawer, List, ListItem, ListItemButton,
} from "@mui/material";


const Navbar = () => {

    const { mode, toggleMode } = useContext(ColorModeContext);
    const [menu, setMenu] = useState();
    const router = useRouter();
    const countOfProduct = useSelector(state => state.cart.totalProcuts);

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
            position: 'relative', py: { xl: "15px" },
        }}>

            <Box sx={{
                display: 'flex', justifyContent: "space-between",
                alignItems: 'center', backgroundColor: "transparent"
            }}>


                {/* 
                    responsive menu 
                    check the below for this component
                */}
                <ResponsiveMenu menu={menu} setMenu={setMenu} router={router} />



                {/* 
                    desktop menu 
                    check the below for this component
                */}
                <DesktopMenu router={router} />



                {/* icons */}
                <Box sx={{
                    display: "flex", alignItems: "center"
                }}>
                    {/* Light / Dark */}
                    <Tooltip title='Theme'>
                        <IconButton onClick={toggleMode} color='primary'>
                            {mode === 'dark' ? <HiOutlineMoon sx={{ fontSize: '25px' }} /> :
                                <HiOutlineSun fontSize={23} />}
                        </IconButton>
                    </Tooltip>

                    {/* Cart */}
                    <Link href='/cart'>
                        <Tooltip title='cart'>
                            <IconButton color="primary" sx={{ px: '12px' }}>
                                <Badge badgeContent={countOfProduct} color="navCart"
                                    sx={{
                                        "& .MuiBadge-badge": {
                                            fontWeight: "600", color: "#EEEEEE"
                                        }
                                    }}
                                >
                                    <HiOutlineShoppingBag fontSize={23} />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Link>

                    {/* Person Account */}
                    <Box sx={{
                        display: { xs: "none", xl: "block" }
                    }}>
                        <Link href='/register'>
                            <Tooltip title='Profile'>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <HiOutlineUser fontSize={23} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Box>


                </Box>

            </Box>
        </Box>
    );
}

export default Navbar;


function DesktopMenu({ router }) {

    return (
        <Box sx={{
            display: { xl: 'flex', xs: "none" },
            alignItems: 'center', gap: "60px"
        }}>

            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <Box sx={{
                display: "flex", alignItems: "center", gap: "15px"
            }}>

                <Link href='/'>
                    <Typography variant="subtitle1" color="primary" fontWeight={600}
                        sx={{
                            borderBottom: `${router.asPath === '/' && "2px solid #998e76"}`,
                            cursor: "pointer", px: "6px", ":hover": { color: "#B2B2B2" },
                            transition: 'all .15s linear'
                        }}
                    >
                        Home
                    </Typography>
                </Link>

                <Link href='/products'>
                    <Typography variant="subtitle1" color="primary" fontWeight={600}
                        sx={{
                            borderBottom: `${router.asPath === '/products' && "2px solid #998e76"}`,
                            cursor: "pointer", px: "6px", ":hover": { color: "#B2B2B2" },
                            transition: 'all .15s linear'
                        }}
                    >
                        Products
                    </Typography>
                </Link>

                <Link href='/aboutUs'>
                    <Typography variant="subtitle1" color="primary" fontWeight={600}
                        sx={{
                            borderBottom: `${router.asPath === '/aboutUs' && "2px solid #998e76"}`,
                            cursor: "pointer", px: "6px", ":hover": { color: "#B2B2B2" },
                            transition: 'all .15s linear'
                        }}
                    >
                        About us
                    </Typography>
                </Link>

                <Link href='/contactUs'>
                    <Typography variant="subtitle1" color="primary" fontWeight={600}
                        sx={{
                            borderBottom: `${router.asPath === '/contactUs' && "2px solid #998e76"}`,
                            cursor: "pointer", px: "6px", ":hover": { color: "#B2B2B2" },
                            transition: 'all .15s linear'
                        }}
                    >
                        Contact us
                    </Typography>
                </Link>

            </Box>

        </Box>
    );
}


function ResponsiveMenu({ menu, setMenu, router }) {

    return (
        <Box sx={{
            display: { xl: "none", xs: "block" },
        }}>

            {/* menu icon */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenu(true)}
            >
                <HiOutlineMenuAlt2 style={{ color: "primary" }} />
            </IconButton>


            {/* sibe menu */}
            <Drawer
                anchor='left'
                open={menu}
                onClose={() => setMenu(false)}
            >
                <Box
                    sx={{ width: { xs: 200, md: 250 } }}
                    role="presentation"
                    onClick={() => setMenu(false)}
                    onKeyDown={() => setMenu(false)}
                >


                    <List sx={{
                        width: "100%", height: "50px",
                        display: 'flex', justifyContent: "center",
                        alignItems: "center", mt: "20px"
                    }}>
                        <Logo />
                    </List>


                    <List>
                        <ListItem disablePadding
                            sx={{
                                display: 'flex', flexDirection: 'column',
                                width: '100%', mt: '20px'
                            }}
                        >

                            <Link href='/'>
                                <ListItemButton sx={{
                                    display: 'flex', alignItems: 'center',
                                    width: '100%', gap: '15px', pl: "25px", py: "15px",
                                    cursor: "pointer",
                                    backgroundColor: `${router.asPath === '/' && "#deac7c"}`,
                                }}>
                                    <HiOutlineHome style={{
                                        color: `${router.asPath === '/' ? "black" : "primary"}`,
                                        fontSize: "25px"
                                    }} />
                                    <Typography variant="subtitle1"
                                        color={`${router.asPath === '/' ? "black" : "primary"}`}
                                        fontWeight={600} px={"6px"}
                                    >
                                        Home
                                    </Typography>
                                </ListItemButton>
                            </Link>

                            <Link href='/products'>
                                <ListItemButton sx={{
                                    display: 'flex', alignItems: 'center',
                                    width: '100%', gap: '15px', pl: "25px", py: "15px",
                                    cursor: "pointer",
                                    backgroundColor: `${router.asPath === '/products' && "#deac7c"}`,
                                }}>
                                    <HiOutlineTag style={{
                                        color: `${router.asPath === '/products' ? "black" : "primary"}`,
                                        fontSize: "25px"
                                    }} />
                                    <Typography variant="subtitle1"
                                        color={`${router.asPath === '/products' ? "black" : "primary"}`}
                                        fontWeight={600} px={"6px"}
                                    >
                                        Products
                                    </Typography>
                                </ListItemButton>
                            </Link>

                            <Link href='/register'>
                                <ListItemButton sx={{
                                    display: 'flex', alignItems: 'center',
                                    width: '100%', gap: '15px', pl: "25px", py: "15px",
                                    cursor: "pointer",
                                    backgroundColor: `
                                    ${router.asPath === '/register' ? "#deac7c"
                                            : router.asPath === '/login' ? "#deac7c"
                                                : ""}
                                    `
                                }}>
                                    <HiOutlineUser style={{
                                        color: `${router.asPath === '/register' ? "black"
                                            : router.asPath === '/login' ? "black"
                                                : "primary"}`,
                                        fontSize: "25px"
                                    }} />
                                    <Typography variant="subtitle1"
                                        color={`${router.asPath === '/register' ? "black"
                                            : router.asPath === '/login' ? "black"
                                                : "primary"}`}
                                        fontWeight={600} px={"6px"}
                                    >
                                        Profile
                                    </Typography>
                                </ListItemButton>
                            </Link>

                            <Link href='/aboutUs'>
                                <ListItemButton sx={{
                                    display: 'flex', alignItems: 'center',
                                    width: '100%', gap: '15px', pl: "25px", py: "15px",
                                    cursor: "pointer",
                                    backgroundColor: `${router.asPath === '/aboutUs' && "#deac7c"}`,
                                }}>
                                    <HiOutlineInformationCircle style={{
                                        color: `${router.asPath === '/aboutUs' ? "black" : "primary"}`,
                                        fontSize: "25px"
                                    }} />
                                    <Typography variant="subtitle1"
                                        color={`${router.asPath === '/aboutUs' ? "black" : "primary"}`}
                                        fontWeight={600} px={"6px"}
                                    >
                                        About us
                                    </Typography>
                                </ListItemButton>
                            </Link>

                            <Link href='/contactUs'>
                                <ListItemButton sx={{
                                    display: 'flex', alignItems: 'center',
                                    width: '100%', gap: '15px', pl: "25px", py: "15px",
                                    cursor: "pointer",
                                    backgroundColor: `${router.asPath === '/contactUs' && "#deac7c"}`,
                                }}>
                                    <HiOutlineAnnotation style={{
                                        color: `${router.asPath === '/contactUs' ? "black" : "primary"}`,
                                        fontSize: "25px"
                                    }} />
                                    <Typography variant="subtitle1"
                                        color={`${router.asPath === '/contactUs' ? "black" : "primary"}`}
                                        fontWeight={600} px={"6px"}
                                    >
                                        Contact us
                                    </Typography>
                                </ListItemButton>
                            </Link>

                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
