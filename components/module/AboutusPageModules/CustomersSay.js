import Image from "next/image";

// mui
import { Box, Rating, Typography } from "@mui/material";

// slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";


function CustomersSay() {
    return (
        <Box sx={{
            mt: { xs: "70px", md: "100px" },
        }}>


            {/* title */}
            <Typography variant="h3"
                sx={{
                    fontWeight: "600", mb: '20px',
                    fontSize: { xs: "22px", md: "32px" }, pb: "10px",
                    borderBottom: "1px solid #6c757d",
                    width: { xs: "230px", md: "350px" },
                }}>
                What customers say
            </Typography>


            {/* slider */}
            <Box sx={{
                minWidth: "300px", cursor: "default", m: "auto",
            }}>
                {/* check the below for this component */}
                <CustomersSlider />
            </Box>


        </Box>
    );
}

export default CustomersSay;

function CustomersSlider() {

    const sliderContent = [
        { id: 1, name: "joseph", rate: 10, path: "/pictures/customers/joseph.jpg" },
        { id: 2, name: "mariana", rate: 9, path: "/pictures/customers/mariana.jpg" },
        { id: 3, name: "jake", rate: 10, path: "/pictures/customers/jake.jpg" },
        { id: 4, name: "emyli", rate: 8, path: "/pictures/customers/emyli.jpg" },
    ]

    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >

            {sliderContent.map(item =>
                <SwiperSlide key={item.id}>
                    <Box sx={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        flexDirection: { xs: "column", md: "row" },
                        pb: "50px", pt: "20px", px: "10px",
                        gap: { xs: "30px", xl: "70px" },
                    }}>

                        {/* picture */}
                        <Box sx={{
                            width: { xs: "230px", md: "300px", xl: "320px" },
                            textAlign: { xs: "center", xl: "start" },
                        }}>
                            <Image src={item.path} alt={item.name}
                                width={400} height={550}
                                style={{ borderRadius: "15px" }}
                            />
                        </Box>

                        {/* content */}
                        <Box sx={{
                            width: { xs: "300px", md: "400px", xl: "500px" },
                        }}>

                            {/* name */}
                            <Typography variant="h5" sx={{
                                fontWeight: "600", mb: "10px", color: "#e36414",
                                fontSize: { xs: "15px", md: "20px" },
                            }}>
                                {item.name}
                            </Typography>


                            {/* rate */}
                            <Rating
                                name="read-only"
                                value={item.rate}
                                readOnly
                                precision={0.5}
                                size="small"
                            />


                            {/* descriptions */}
                            <Typography variant="grayText" component="p" sx={{
                                fontSize: { xs: "11px", md: "12px", xl: "12.5px" },
                                mb: "15px", fontWeight: "600", textAlign: "justify",
                                lineHeight: "20px",
                            }}>
                                &quot;Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting.&quot;
                            </Typography>

                        </Box>

                    </Box>
                </SwiperSlide>
            )}

        </Swiper>
    )
}