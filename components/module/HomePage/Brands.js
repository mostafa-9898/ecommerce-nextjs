import Image from "next/image";

// mui
import { Box } from "@mui/material";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// svg icons
import adidas from "../../../public/brands/adidas.svg";
import amazon from "../../../public/brands/amazon.svg";
import apple from "../../../public/brands/apple.svg";
import dell from "../../../public/brands/dell.svg";
import nike from "../../../public/brands/nike.svg";
import rolex from "../../../public/brands/rolex.svg";
import samsung from "../../../public/brands/samsung.svg";
import zara from "../../../public/brands/zara.svg";
import gucci from "../../../public/brands/gucci.svg";
import hp from "../../../public/brands/hp.svg";
import lancôme from "../../../public/brands/lancôme.svg";
import intel from "../../../public/brands/intel.svg";
import starbucks from "../../../public/brands/starbucks.svg";

function Brands() {

    return (
        <Box sx={{ backgroundColor: "#1E1E1E" }}>

            <Box sx={{
                maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
                py: "20px"
            }}>

                <BrandsSlider />

            </Box>

        </Box>
    );
}

export default Brands;



function BrandsSlider() {

    const sliderContent = [
        { id: 1, name: "adidas", picture: adidas },
        { id: 2, name: "amazon", picture: amazon },
        { id: 3, name: "apple", picture: apple },
        { id: 4, name: "dell", picture: dell },
        { id: 5, name: "nike", picture: nike },
        { id: 6, name: "rolex", picture: rolex },
        { id: 7, name: "samsung", picture: samsung },
        { id: 9, name: "zara", picture: zara },
        { id: 10, name: "gucci", picture: gucci },
        { id: 11, name: "hp", picture: hp },
        { id: 12, name: "lancôme", picture: lancôme },
        { id: 13, name: "intel", picture: intel },
        { id: 14, name: "starbucks", picture: starbucks },
    ]

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
                        <Image src={item.picture} alt={item.name} width="100%" height="100%" />
                    </Box>
                </SwiperSlide>

            )}
        </Swiper>
    );
}