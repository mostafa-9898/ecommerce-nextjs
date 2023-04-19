import Image from "next/image";

// mui
import { Box, Grid, Typography } from "@mui/material";

function WeOffer() {

    const offerContent = [
        {
            id: 1,
            name: "dollar",
            path: "/svg/dollar.svg",
            title: "Orginal Products",
            descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 2,
            name: "smiling",
            path: "/svg/smiling.svg",
            title: "Satisfaction Guarantee",
            descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 3,
            name: "openBox",
            path: "/svg/box.svg",
            title: "New Arrival Everyday",
            descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 4,
            name: "delivery",
            path: "/svg/delivery.svg",
            title: "Fast & Free Shipping",
            descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },

    ]

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "40px" },
            mt: { xs: "0px", md: "100px" }
        }}>


            {/* title of this section */}
            <Box sx={{
                display: "flex", alignItems: "center", gap: { md: "20px", xl: "100px" },
                justifyContent: { xs: "left", xl: "left" },
                pl: "10px", mt: { xs: "60px", xl: "100px" },
                mb: "30px", height: { xl: "90px" },
            }}>

                <Box sx={{
                    textAlign: { xs: "left", xl: "left" }, height: "100%", width: "100%"
                }}>

                    <Typography variant="h4" component="h3"
                        fontWeight={600} fontSize={{ xs: "25px", md: "35px" }}
                    >
                        We provide best
                    </Typography>
                    <Typography variant="h4" component="h3"
                        fontWeight={600} fontSize={{ xs: "25px", md: "35px" }}
                    >
                        customer experience
                    </Typography>

                </Box>

                <Box sx={{
                    borderLeft: "2px solid", height: "80%", pl: "15px",
                    width: { md: "80%", xl: "100%", xxl: "200%" },
                    display: { xs: "none", md: "flex" }, alignItems: "center"
                }}>
                    <Typography variant="grayText"
                        fontSize={{ md: "14px", xl: "16px" }}
                    >
                        We ensure our customers have the best shopping exprince
                    </Typography>
                </Box>

            </Box>


            <Grid container spacing={5}>

                {offerContent.map(item =>

                    <Grid item xs={12} md={6} xl={3} key={item.id}>

                        <Box key={item.id} sx={{
                            borderRadius: "15px", p: "15px",
                            width: { xs: "320px", md: "295", xl: "210px", xxl: "300px" },
                            boxShadow: "5px 5px 10px #f3f3f3, -5px -5px 10px #f7f7f7",
                        }}>

                            {/* picture */}
                            <Box sx={{
                                width: "50px", height: "50px", borderRadius: "5px",
                                backgroundColor: "#ced4da",
                                display: "flex", alignItems: "center",
                                justifyContent: "center", mb: "10px"
                            }}>
                                <Image src={item.path} alt={item.name} width={25} height={25} />
                            </Box>

                            {/* title */}
                            <Box mb="2px">
                                <Typography variant="body1" component="h4"
                                    fontWeight={600} sx={{ cursor: "default" }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>

                            {/* descriptions */}
                            <Box>
                                <Typography variant="grayText" component="p"
                                    fontSize={12} sx={{ cursor: "default" }}
                                >
                                    {item.descriptions}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>

                )}

            </Grid>


        </Box>
    );
}

export default WeOffer;