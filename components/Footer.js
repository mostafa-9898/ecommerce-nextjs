import Image from "next/image";

// mui
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

// image
import paypal from '../public/paypal.png'

const Footer = () => {

    const isTablet = useMediaQuery('(max-width:900px)')

    return (
        <>
            <Box maxWidth='1152px' m='auto' p={`${isTablet ? '5px' : '10px'}`} display='flex' flexDirection={`${isTablet ? 'column' : 'row'}`}
                justifyContent='space-between' mt='80px' pb='10px' gap={`${isTablet && '50px'}`}
            >

                {/* Contact */}
                <Box>
                    <Typography variant="body1" component='h3' fontWeight={600} mb='20px'>
                        Contact
                    </Typography>

                    <Box>
                        <Typography variant="body2" component='h3' fontWeight={600}>
                            Address:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '10px' }}>
                            562 Wellington Road. Street32. San Francisco
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" component='h3' fontWeight={600}>
                            Email:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '10px' }}>
                            Ecommerce@example.com
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" component='h3' fontWeight={600}>
                            Phone:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '10px' }}>
                            +01 2222 345 / (+91) 01 2345 6789
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" component='h3' fontWeight={600}>
                            Hours:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '10px' }}>
                            10:00 - 18:00. Mon-Sat
                        </Typography>
                    </Box>

                    <Typography variant="body2" component='h3' fontWeight={600} mt='20px' mb='10px'>
                        Follow Us
                    </Typography>

                    <Box display='flex' gap='10px'>
                        <FacebookIcon sx={{ cursor: 'pointer' }} />
                        <TwitterIcon sx={{ cursor: 'pointer' }} />
                        <InstagramIcon sx={{ cursor: 'pointer' }} />
                        <YouTubeIcon sx={{ cursor: 'pointer' }} />
                    </Box>
                </Box>

                {/* About &  My Account */}
                <Box display='flex' gap='50px'>

                    <Box display='flex' flexDirection='column' gap='7px'>
                        <Typography variant="body1" component='h3' fontWeight={600} mb='10px'>
                            About
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            About Us
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Delivery Information
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Privacy Policy
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Terms & Conditions
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Contact Us
                        </Typography>
                    </Box>

                    <Box display='flex' flexDirection='column' gap='7px'>
                        <Typography variant="body1" component='h3' fontWeight={600} mb='10px'>
                            My Account
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Sign In
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            View Cart
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            My Wishlist
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Track My Order
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Help
                        </Typography>
                    </Box>
                </Box>

                {/* Inistall App */}
                <Box>
                    <Typography variant="body1" component='h3' fontWeight={600} mb='20px'>
                        Inistall App
                    </Typography>

                    <Box display='flex' flexDirection='column' gap='7px'>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            From App Store or Google Play
                        </Typography>

                        <Box display='flex' gap='10px' mb='13px'>
                            <Button variant="outlined">
                                <AppleIcon sx={{ mr: '10px' }} />
                                App Store
                            </Button>
                            <Button variant="outlined">
                                <ShopIcon sx={{ mr: '10px' }} />
                                Google Play
                            </Button>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'gray', pl: '5px' }}>
                            Secured Payment Gateways
                        </Typography>
                        <Box>
                            <Image src={paypal} alt='paypal' width='320px' height='80px' style={{ cursor: 'pointer' }} />
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Typography variant="body2" textAlign='center' py='20px'>
                Copyright © 2022, Ecommerce With NextJs
            </Typography>
        </>
    );
}

export default Footer;