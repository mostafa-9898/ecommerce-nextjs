import Image from "next/image";

// mui
import { Box, Typography } from "@mui/material";

function LittleBoxes() {

    const boxContents = [
        { img: "/svg/free-shipping.svg", title: 'Free Shipping' },
        { img: "/svg/online-order.svg", title: 'Online Order' },
        { img: "/svg/save-money.svg", title: 'Save Money' },
        { img: "/svg/promotions.svg", title: 'Promotions' },
        { img: "/svg/happy-sell.svg", title: 'Happy Sell' },
        { img: "/svg/support.svg", title: '24H Support' }
    ]

    return (
        <Box sx={{
            mt: "50px"
        }}>

            {/* title */}
            <Typography variant="h3"
                sx={{
                    fontWeight: "600", mb: '40px',
                    fontSize: { xs: "22px", md: "32px" }, pb: "10px",
                    borderBottom: "1px solid #6c757d",
                    width: { xs: "220px", md: "300px" },
                }}>
                You should know
            </Typography>



            {/* boxes */}
            <Box sx={{
                display: 'flex', alignItems: 'center',
                flexDirection: 'row', flexWrap: 'wrap',
                gap: { xs: "30px", md: "50px", xl: "30px" },
                justifyContent: "space-evenly",
            }}>


                {boxContents.map(item =>

                    <Box key={item.title} sx={{
                        p: { xs: "15px", md: "24px" }, textAlign: 'center',
                        boxShadow: "5px 5px 10px #f3f3f3, -5px -5px 10px #f7f7f7",
                        borderRadius: "15px"
                    }}>

                        <Box sx={{
                            width: { xs: "100px", md: "120px" }, pb: "10px"
                        }}>
                            <Image src={item.img} alt='pic' width='130px' height='110px' />
                        </Box>

                        <Box sx={{
                            backgroundColor: 'rgba(136, 164, 124, .7)', mt: '10px', px: '10px',
                            py: '3px', borderRadius: '10px',
                        }}>

                            <Typography variant='body2' sx={{
                                cursor: "default", fontSize: { xs: "11px", md: "12px" },
                                fontWeight: "600",
                            }}>
                                {item.title}
                            </Typography>

                        </Box>

                    </Box>
                )}

            </Box>

        </Box>
    );
}

export default LittleBoxes;