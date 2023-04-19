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
                    width: "900px", position: "relative", textAlign: "center",
                    backdropFilter: 'blur( 2px )', bordeRadius: '30px',
                }}>
                    <Typography variant='h2' component='h3' color='white'
                        textAlign='center' mb='30px' fontWeight={700}
                        fontSize={{ xs: "30px", md: "50px", xl: "80px" }}
                    >
                        Level up your style with our collections
                    </Typography>

                    <Link href='/products'>
                        <Button variant='contained' color='button'
                            sx={{
                                width: { xs: "110px", md: "120px", xl: "150px" },
                                height: { xs: "35px", md: "40px", xl: "50px" }
                            }}>
                            <Typography variant='subtitle1' color='white'
                                fontWeight={500} fontSize={{ xs: "11px", md: "13px", xl: "14px" }}
                                mr="8px"
                            >
                                Shop Now
                            </Typography>

                            <HiOutlineArrowRight color="white" fontSize={16} />

                        </Button>
                    </Link>
                </Box>

            </Box>

        </Box>
    );
}

export default HomeHeader;