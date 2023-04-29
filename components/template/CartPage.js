import Link from "next/link";

// mui
import { Box, Button, Typography } from "@mui/material";

// component
import CartItems from "../module/CartPageModules/CartItems";
import CartPayment from "../module/CartPageModules/CartPayment";

// redux
import { useSelector } from "react-redux";
import { MyBtn } from "../elements/MyBtn";

const CartPage = () => {

    const cartState = useSelector(state => state.cart)

    return (
        <Box sx={{
            maxWidth: '1152px', m: 'auto', pt: '50px',
            display: 'flex', minHeight: "50vh",
            alignItems: "start", justifyContent: "center"
        }}>

            {cartState.totalProcuts > 0 ?
                <Box sx={{
                    display: 'flex', gap: { xs: "30px", xl: '70px' },
                    justifyContent: "center",
                    alignItems: { xs: "center", xl: "start" },
                    flexDirection: { xs: "column", xl: "row" },
                }}>
                    <CartItems />
                    <CartPayment />
                </Box>
                :

                <Box sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <Typography variant="h5" sx={{
                            fontWeight: "600", mb: '20px'
                        }}>
                            Your shopping cart is empty
                        </Typography>

                        <MyBtn href="/products" textContent="Products" />

                    </Box>
                </Box>
            }

        </Box>
    );
}

export default CartPage;