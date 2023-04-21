import Link from 'next/link';

// mui
import { Box, Button, Typography } from '@mui/material';

// icons
import { HiOutlineArrowRight } from 'react-icons/hi';

function HomeHeader() {
    return (
        <Box>

            <Box sx={{
                backgroundImage: `url("/pictures/LandingPage.jpg")`,
                height: { xl: "800px", md: "700px", xs: "400px" },
                width: "100%", backgroundRepeat: "no-repeat",
                backgroundSize: "cover", position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center"
            }}>
                <Box sx={{
                    position: "absolute", inset: "0px",
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur( 1.5px )',
                }}></Box>

                {/* Content on center */}
                <Box sx={{
                    width: { xs: "300px", md: "400px", xl: "500px" },
                    position: "relative", textAlign: "center",
                    backdropFilter: 'blur( 2px )', bordeRadius: '30px',
                }}>
                    <Typography variant='h2' component='h3' sx={{
                        color: 'white', mb: '20px',
                        textAlign: 'center', fontWeight: "700",
                        fontSize: { xs: "20px", md: "35px", xl: "45px" },
                    }}>
                        Level up your style with our collections
                    </Typography>

                    <Link href='/products'>
                        <Button variant='contained' color='button' sx={{
                            width: { xs: "110px", md: "120px", xl: "130px" },
                            height: { xs: "32px", md: "37px", xl: "40px" }
                        }}>
                            <Typography variant='subtitle1' sx={{
                                color: 'white', fontWeight: "500",
                                mr: { xs: "4px", md: "5px", xl: "7px" },
                                fontSize: { xs: "11px", xl: "12px" },
                            }}>
                                Shop Now
                            </Typography>

                            <HiOutlineArrowRight color="white" fontSize={13} />

                        </Button>
                    </Link>
                </Box>

            </Box>

        </Box>
    );
}

export default HomeHeader;