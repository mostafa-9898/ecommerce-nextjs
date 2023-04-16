import Image from 'next/image';

// swiper
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// images
import slideOne from '../public/slide-one.svg'
import slideTwo from '../public/slide-Two.svg'
import slideThree from '../public/slide-Three.svg'
import slideFour from '../public/slide-four.svg'

// mui
import { Button, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

const Slider = () => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const content = [
        {
            img: slideOne,
            title: "men's clothing",
            description: "don't compromise on style! get flat 30% off for new arrivals."
        },
        {
            img: slideTwo,
            title: "women's clothing",
            description: "don't compromise on style! get flat 30% off for new arrivals."
        },
        {
            img: slideThree,
            title: "jewelery",
            description: "don't compromise on style! get flat 30% off for new arrivals."
        },
        {
            img: slideFour,
            title: "electronics",
            description: "don't compromise on style! get flat 30% off for new arrivals."
        }
    ]

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="mySwiper"
            >
                {content.map(item =>
                    <SwiperSlide key={item.title}>

                        <Box sx={{
                            display: 'flex', alignItems: 'center', background: "green",
                            flexDirection: `${isTablet ? 'column' : 'row'}`,
                            justifyContent: 'center', gap: '50px', my: '50px'
                        }}>
                            <Box>
                                <Image src={item.img} alt='banner' width={600} height={400} />
                            </Box>

                            <Box width={`${isTablet ? '90%' : '40%'}`}>

                                <Typography variant={`${isTablet ? 'h5' : 'h4'}`} component='h1' fontWeight={600} mb='40px'>
                                    {item.title.toLocaleUpperCase()}
                                </Typography>

                                <Typography variant='body1' component='h3' mb='40px' fontSize='14px'
                                    sx={{ wordSpacing: '10px' }}>
                                    {item.description.toLocaleUpperCase()}
                                </Typography>

                                <Link href='/products'>
                                    <Button variant='outlined'>
                                        Shop Now
                                    </Button>
                                </Link>

                            </Box>
                        </Box>

                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

export default Slider;