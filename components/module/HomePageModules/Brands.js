import Image from "next/image";

// mui
import { Box } from "@mui/material";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Brands() {

    return (
        <Box sx={{ backgroundColor: "#1E1E1E" }}>

            <Box sx={{
                maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
                py: "20px"
            }}>
                {/* check the below for this component */}
                <BrandsSlider />

            </Box>

        </Box>
    );
}

export default Brands;



function BrandsSlider() {

    const sliderContent = [
        { id: 1, name: "adidas", path: "/svg/brands/adidas.svg" },
        { id: 2, name: "amazon", path: "/svg/brands/amazon.svg" },
        { id: 3, name: "apple", path: "/svg/brands/apple.svg" },
        { id: 4, name: "dell", path: "/svg/brands/dell.svg" },
        { id: 5, name: "nike", path: "/svg/brands/nike.svg" },
        { id: 6, name: "rolex", path: "/svg/brands/rolex.svg" },
        { id: 7, name: "samsung", path: "/svg/brands/samsung.svg" },
        { id: 9, name: "zara", path: "/svg/brands/zara.svg" },
        { id: 10, name: "gucci", path: "/svg/brands/gucci.svg" },
        { id: 11, name: "hp", path: "/svg/brands/hp.svg" },
        { id: 12, name: "lancôme", path: "/svg/brands/lancôme.svg" },
        { id: 13, name: "intel", path: "/svg/brands/intel.svg" },
    ]

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
                1576: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                },
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {sliderContent.map(item =>

                <SwiperSlide key={item.id} style={{
                    display: "flex",
                    alignItems: "center", justifyContent: "center"
                }}>
                    <Box sx={{
                        width: { xs: "40px", md: "50px", xl: "60px" },
                        height: { xs: "40px", md: "50px", xl: "60px" },

                    }}>
                        <Image src={item.path} alt={item.name} width="100%" height="100%" />
                    </Box>
                </SwiperSlide>

            )}
        </Swiper>
    );
}