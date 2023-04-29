import Image from "next/image";

// component
import CardButtons from "../../elements/CardButtons";

// redux
import { useSelector } from "react-redux";

// mui
import { Box, Typography } from "@mui/material";


function CartItems() {

    const cartState = useSelector(state => state.cart.selectedProducts);

    return (
        <Box sx={{
            width: "100%"
        }}>

            {cartState.map(item => (
                <Box key={item.id} sx={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-around', gap: "20px",
                    pb: '20px', mb: '20px', px: "25px",
                    borderBottom: '1px solid #e9ecef',
                }}>

                    {/* Image */}
                    <Box sx={{
                        width: { xs: "100%", md: "120px" },
                        textAlign: "center"
                    }}>
                        <Image src={item.image} alt='product image'
                            width="110px" height="115px"
                            style={{ borderRadius: "5px" }}
                        />
                    </Box>

                    <Box sx={{
                        width: { xs: "100%", md: "500px", xl: "600px" },
                        display: "flex", gap: { xs: "20px", md: "0px" },
                        flexDirection: { xs: 'column', md: 'row' },
                    }}>
                        {/* title */}
                        <Box sx={{
                            width: { xs: "100%", md: "200px" },
                            textAlign: { xs: "center", md: "start" }
                        }}>
                            <Typography variant="body1" sx={{
                                fontWeight: "500",
                                fontSize: "17px"
                            }}>
                                {item.title.slice(0, 11)}
                            </Typography>
                        </Box>


                        {/* Quantity */}
                        <Box sx={{
                            width: { xs: "100%", md: "250px" },
                            display: "flex", justifyContent: "center"
                        }}>
                            <CardButtons product={item} />
                        </Box>


                        {/* Price */}
                        <Box sx={{
                            width: { xs: "100%", md: "120px" },
                            textAlign: "center"
                        }}>
                            <Typography variant="body1" sx={{
                                fontSize: "18px",
                                fontWeight: "500"
                            }}>
                                $ {item.price}
                            </Typography>
                        </Box>

                    </Box>

                </Box>
            ))
            }

        </Box >
    );
}

export default CartItems;