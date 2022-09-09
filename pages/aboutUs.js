import Image from 'next/image';

// image
import banner from '../public/abouUs.svg'
import freeShipping from '../public/free shipping.svg'
import onlineOrder from '../public/online order.svg'
import saveMoney from '../public/save money.svg'
import promotions from '../public/promotions.svg'
import happySell from '../public/happy sell.svg'
import support from '../public/24h support.svg'

// mui
import { Box } from '@mui/system';
import { Button, TextField, Typography, useMediaQuery } from '@mui/material';

const AboutUs = () => {

    const isTablet = useMediaQuery('(max-width:900px)')
    const isMobile = useMediaQuery('(max-width:370px)')

    const content = [
        { img: freeShipping, title: 'Free Shipping' },
        { img: onlineOrder, title: 'Online Order' },
        { img: saveMoney, title: 'Save Money' },
        { img: promotions, title: 'Promotions' },
        { img: happySell, title: 'Happy Sell' },
        { img: support, title: '24H Support' }
    ]

    return (
        <Box m='auto' maxWidth='1152px'>

            {/* Header */}
            <Box display='flex' alignItems='center'
                flexDirection={`${isTablet ? 'column' : 'row'}`}
                justifyContent='center' gap='50px' height='90vh'
            >
                <Box>
                    <Image src={banner} alt='banner' width={600} height={400} />
                </Box>

                <Box width={`${isTablet ? '90%' : '50%'}`} pt={`${isTablet ? '0px' : '100px'}`}>

                    <Typography variant={`${isTablet ? 'h4' : 'h3'}`} component='h1' fontWeight={600} mb='40px'>
                        Who We Are?
                    </Typography>

                    <Typography variant='body1' component='h3' mb='40px'
                        sx={{ wordSpacing: '5px', textAlign: 'revert' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </Typography>

                </Box>
            </Box>

            {/* Little boxes about site */}
            <Box display='flex' alignItems='center'
                flexDirection='row' flexWrap='wrap' gap='20px'
                justifyContent='center'>

                {content.map(item =>
                    <Box key={item.title} border='1px solid gray' p='20px' textAlign='center'>
                        <Image src={item.img} alt='pic' width='100px' height='80px' />
                        <Box sx={{
                            backgroundColor: 'rgba(76, 149, 108, .3)', mt: '10px', px: '10px',
                            py: '3px', borderRadius: '10px'
                        }}>
                            <Typography variant='body2'>
                                {item.title}
                            </Typography>
                        </Box>
                    </Box>
                )}

            </Box>

            {/* gmai for news about site */}
            <Box display='flex' alignItems='center'
                flexDirection={`${isTablet ? 'column' : 'row'}`}
                justifyContent='center' mt='80px' textAlign='center'>

                <Box width={`${isTablet ? '100%' : '50%'}`} p='20px'>
                    <Typography variant='h5' component='h1' fontWeight={600}>
                        Sign Up For Newsletters
                    </Typography>
                    <Typography variant='body2' component='h3' sx={{ color: 'gray', mt: '7px' }} >
                        Get E-mail updates about our latest shop and special offers.
                    </Typography>
                </Box>

                <Box display='flex' flexDirection={`${isMobile ? 'column' : 'row'}`} alignItems='center' justifyContent='center' width={`${isTablet ? '100%' : '50%'}`}>

                    <TextField sx={{ width: `${isTablet ? '250px' : '400px'}` }} size='small' label="Your E-mail" id="email" />
                    <Button variant='contained' color='success' sx={{ borderRadius: '0 5px 5px 0', py: '8px' }}>
                        Sign Up
                    </Button>
                </Box>

            </Box>

        </Box>
    );
}

export default AboutUs;