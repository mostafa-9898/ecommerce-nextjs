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
                display: "flex", alignItems: "center",
                justifyContent: "left", gap: { xl: "50px" },
                mt: "50px", height: { md: "90px" },
                pl: "10px", mb: "40px",
            }}>

                {/* title */}
                <Box sx={{
                    height: "100%", width: "100%"
                }}>

                    <Typography variant="h4" component="h3" sx={{
                        fontWeight: "600", fontSize: { xs: "22px", md: "32px" }
                    }}>
                        We provide best
                    </Typography>
                    <Typography variant="h4" component="h3" sx={{
                        fontWeight: "600", fontSize: { xs: "22px", md: "32px" },
                        borderBottom: { xs: "1px solid #6c757d", md: "none" },
                        pb: { xs: "10px", md: "0px" }
                    }}>
                        customer experience
                    </Typography>

                </Box>

                {/* section */}
                <Box sx={{
                    borderLeft: "2px solid", height: "80%", pl: "15px",
                    width: { md: "80%", xl: "100%", xl: "200%" },
                    display: { xs: "none", md: "flex" }, alignItems: "center"
                }}>
                    <Typography variant="grayText" sx={{
                        fontSize: "14px",
                    }}>
                        We ensure our customers have the best shopping exprince.
                    </Typography>
                </Box>

            </Box>


            {/* boxes */}
            <Grid container spacing={5}>

                {offerContent.map(item =>

                    <Grid item xs={12} md={6} xl={3} key={item.id}>

                        <Box key={item.id} sx={{
                            borderRadius: "15px", p: "15px",
                            width: { xs: "290px", md: "340px", xl: "270px" },
                            boxShadow: "5px 5px 10px #f3f3f3, -5px -5px 10px #f7f7f7",
                        }}>

                            {/* picture */}
                            <Box sx={{
                                width: "45px", height: "45px", borderRadius: "5px",
                                backgroundColor: "#ced4da",
                                display: "flex", alignItems: "center",
                                justifyContent: "center", mb: "15px"
                            }}>
                                <Image src={item.path} alt={item.name}
                                    width={25} height={25} />
                            </Box>

                            {/* title */}
                            <Typography variant="h5" sx={{
                                cursor: "default", fontWeight: "600",
                                fontSize: { xs: "12px", md: "13px" },
                                mb: "2px"
                            }}>
                                {item.title}
                            </Typography>


                            {/* descriptions */}
                            <Box>
                                <Typography variant="grayText" sx={{
                                    cursor: "default",
                                    fontSize: { xs: "11px", md: "11px" },
                                }}>
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