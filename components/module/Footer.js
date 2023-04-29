import Link from "next/link";
import Image from "next/image";

// elements
import Logo from "../elements/Logo";

// mui
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";

// icons
import { BsGooglePlay } from 'react-icons/bs';
import { FaAppStoreIos, FaGithub } from 'react-icons/fa';

// payment method svg
import paypal from '../../public/svg/paypal.svg'
import visa from '../../public/svg/visa.svg'
import mastercard from '../../public/svg/mastercard.svg'

const Footer = () => {

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
            mt: { xs: "100px", md: "120px" }, pb: "10px",
        }}>

            {/* footer */}
            <Box sx={{
                display: 'flex', pb: "50px", flexWrap: { xs: "wrap", xl: "nowrap" },
                alignItems: "start", justifyContent: { xl: "space-between" }, gap: "50px",
                borderBottom: "1px solid #d3d3d3",
            }}>

                {/* logo and descriptions */}
                <Box sx={{
                    width: { xs: "350px", xl: "390px" },
                }}>

                    {/* Logo */}
                    <Logo />

                    {/* descriptions */}
                    <Box sx={{ mt: "10px" }}>
                        <Typography variant="grayText" component="p" sx={{
                            fontSize: { xs: "10.5px", md: "12px", xl: "12.5px" },
                            fontWeight: "500", lineHeight: "20px",
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Typography>
                    </Box>

                </Box>

                {/* About &  My Account */}
                <Box sx={{
                    width: { xs: "350px", md: "350px", xl: "420px" }, display: 'flex',
                    gap: { xs: "30px", xl: "50px" }
                }}>

                    {/* colume 1 */}
                    <Box sx={{
                        display: 'flex', flexDirection: 'column', gap: '9px',
                    }}>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            Privacy Policy
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            Contact Us
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            About Us
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            affiliates
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            FAQs
                        </Typography>
                    </Box>

                    {/* colume 2 */}
                    <Box display='flex' flexDirection='column' gap='9px'>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            Delivery Information
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            Terms & Conditions
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            Track My Order
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "13px" } }}
                        >
                            My Wishlist
                        </Typography>
                    </Box>

                    {/* colume 3 */}
                    <Box display='flex' flexDirection='column' gap='9px'>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "14px" } }}
                        >
                            My Account
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "14px" } }}
                        >
                            View Cart
                        </Typography>
                        <Typography variant="body2" fontWeight={600}
                            sx={{ cursor: "pointer", fontSize: { xs: "11px", md: "14px" } }}
                        >
                            Help
                        </Typography>
                    </Box>

                </Box>

                {/* inistall App and payment methods */}
                <Box sx={{
                    width: "390px", display: 'flex',
                    flexDirection: 'column',
                }}>

                    {/* install apps */}
                    <Box sx={{
                        display: 'flex', gap: '10px', mb: '13px',
                    }}>
                        {/* app store */}
                        <Button variant="contained" color="button">

                            <FaAppStoreIos style={{
                                marginRight: '7px', fontSize: "17px", color: "white"
                            }} />

                            <Typography variant='body1' color='white'
                                fontSize={{ xs: "11px", md: "12px" }}
                            >
                                App store
                            </Typography>

                        </Button>

                        {/* google play */}
                        <Button variant="contained" color="button"
                            sx={{ fontSize: { xs: "8.5px", md: "11px" } }}
                        >

                            <BsGooglePlay style={{
                                marginRight: '7px', fontSize: "16px", color: "white"
                            }} />

                            <Typography variant='body1' color='white'
                                fontSize={{ xs: "11px", md: "12px" }}
                            >
                                Google play
                            </Typography>

                        </Button>
                    </Box>

                    {/* payment methods */}
                    <Box sx={{
                        display: 'flex', alignItems: "center",
                        justifyContent: "start", gap: "7px",
                    }}>
                        <Image src={paypal} alt='paypal' width='100px' height='70px' />
                        <Image src={visa} alt='paypal' width='60px' height='60px' />
                        <Image src={mastercard} alt='paypal' width='60px' height='60px' />
                    </Box>

                </Box>


            </Box>


            {/* Copyright */}
            <Box sx={{
                display: "flex", alignItems: "center",
                justifyContent: "center"
            }}>

                <Typography variant="body2" sx={{
                    mt: "10px", fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                    textAlign: "center", fontWeight: "600"
                }}>
                    Copyright © 2023, Ecommerce With NextJs
                </Typography>

                <Link href="https://github.com/mostafa-9898/ecommerce-nextjs" rel="noopener noreferrer">
                    <a target="_blank">
                        <Tooltip title='github'>
                            <IconButton color='primary'>
                                <FaGithub />
                            </IconButton>
                        </Tooltip>
                    </a>
                </Link>

            </Box>


        </Box>
    );
}

export default Footer;