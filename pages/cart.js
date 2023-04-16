import { useEffect, useState } from "react";
import Link from "next/link";

// mui
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";

// component
import CartProducts from "../components/CartProducts";

const Cart = () => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    const clearHandler = () => {
        dispatch({ type: 'CLEAR' })
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <Box maxWidth='1152px' m='auto' pt='50px' display='flex'
            alignItems={`${isTablet ? 'center' : 'flex-start'}`} gap='20px'
            flexDirection={`${isTablet ? 'column' : 'row'}`}
        >

            {/* Cart Prodducts */}
            {hasWindow &&
                <Box flexGrow={1}>

                    {/* If there is no products in cart */}
                    {state.itemsCounter > 0 ?

                        state.selected.map(product => <CartProducts key={product.id} product={product} />)

                        :

                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <Box textAlign='center'>
                                <Typography variant="h5" fontWeight={600} mb='20px'>
                                    Your shopping cart is empty
                                </Typography>
                                <Link href='/products'>
                                    <Button variant="outlined" >
                                        products
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    }

                </Box>
            }

            {/* Cart Payment */}
            {
                hasWindow &&

                <Box border='1px solid gray' borderRadius='10px' p='20px'
                    width='300px' position='sticky' top='20px'
                >

                    {/* Total Products */}
                    <Box display='flex' alignItems='center' gap='10px' mb='30px'>
                        <Typography variant="body2" color='gray' fontWeight={600}>
                            Total Products:
                        </Typography>
                        <Typography variant="body2" fontWeight={600} >
                            {state.itemsCounter}
                        </Typography>
                    </Box>

                    {/* Total Payment */}
                    <Box display='flex' alignItems='center' gap='10px'>
                        <Typography variant="body2" color='gray' fontWeight={600}>
                            Total Payment:
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                            ${state.total}
                        </Typography>
                    </Box>

                    {/* Buttons */}
                    <Box display='flex' alignItems='center' justifyContent='center' gap='30px' mt='50px'>
                        <Button variant="contained" color="error" onClick={clearHandler}>
                            Clear
                        </Button>
                        <Button variant="contained" color="success">
                            payment
                        </Button>
                    </Box>

                </Box>
            }

        </Box>
    );
}

export default Cart;