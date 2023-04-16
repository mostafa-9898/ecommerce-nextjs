import Image from "next/image";

// mui
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

// redux
import { useDispatch, useSelector } from "react-redux";
import { IsInCart, QuantityCount } from "../helpers/functions";



const CartProducts = ({ product }) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const plusHandler = () => {
        dispatch({ type: 'PLUS', payload: product })
    }

    const minusHandler = () => {
        dispatch({ type: 'MINUS', payload: product })
    }

    const removeHandler = () => {
        dispatch({ type: 'REMOVE', payload: product })
    }

    const isMobile = useMediaQuery('(max-width:600px)')

    return (
        <Box display='flex' alignItems='center' flexDirection={`${isMobile ? 'column' : 'row'}`}
            gap={`${isMobile && '10px'}`}
            justifyContent='space-around' pb='20px' mb='20px' borderBottom='1px solid gray'>

            {/* Image */}
            <Box width='100px'>
                <Image src={product.image} alt='product image'
                    width={`${isMobile ? '100px' : '70px'}`}
                    height={`${isMobile ? '120px' : '80px'}`}
                />
            </Box>

            {/* Name */}
            <Box>
                <Box width={`${!isMobile && '200px'}`}>
                    <Typography variant="body2" fontWeight={600}>
                        {product.title.slice(0, 25)}
                    </Typography>
                </Box>
            </Box>

            {/* Price */}
            <Box>
                <Box width='100px' display='flex' alignItems='center'
                    justifyContent='flex-start'>
                    <Typography variant="body2" pr='10px'>
                        price:
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                        ${product.price}
                    </Typography>
                </Box>
            </Box>

            {/* Quantity */}
            <Box display='flex' alignItems='center'
                justifyContent='flex-end' px='20px'>

                {QuantityCount(state, product.id) === 1 &&
                    <Box sx={{ cursor: 'pointer' }} onClick={removeHandler} >
                        <DeleteIcon sx={{
                            fontSize: '35px',
                            color: '#0288d1',
                            "&:hover": { color: '#01579b' }
                        }} />
                    </Box>
                }

                {QuantityCount(state, product.id) > 1 &&
                    <Box sx={{ cursor: 'pointer' }} onClick={minusHandler} >
                        <IndeterminateCheckBoxIcon sx={{
                            fontSize: '35px',
                            color: '#0288d1',
                            "&:hover": { color: '#01579b' }
                        }} />
                    </Box>}

                {QuantityCount(state, product.id) > 0 &&
                    <Typography variant="h6" px='10px' fontWeight={600}>
                        {QuantityCount(state, product.id)}
                    </Typography>}

                {IsInCart(state, product.id) &&

                    <Box sx={{ cursor: 'pointer' }} onClick={plusHandler}>
                        <AddBoxIcon sx={{
                            fontSize: '35px',
                            color: '#0288d1',
                            "&:hover": { color: '#01579b' }
                        }} />
                    </Box>
                }


            </Box>

        </Box>
    );
}

export default CartProducts;