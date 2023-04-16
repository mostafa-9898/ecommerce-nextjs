import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

// redux
import { useDispatch, useSelector } from "react-redux";

// rating stare
import { RatingStar } from "rating-star";

// helpers
import { IsInCart, QuantityCount } from "../../helpers/functions";

// mui
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductDetail = ({ product }) => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const router = useRouter()

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [hasWindow, setHasWindow] = React.useState(false);
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);


    const addHandler = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    const plusHandler = () => {
        dispatch({ type: 'PLUS', payload: product })
    }

    const minusHandler = () => {
        dispatch({ type: 'MINUS', payload: product })
    }

    const removeHandler = () => {
        dispatch({ type: 'REMOVE', payload: product })
    }

    return (
        <Box position='relative' maxWidth='1152px' m='auto'
            py={`${isTablet ? '5px' : '40px'}`}
        >
            {/* back to previous page */}
            <Box position='absolute' left='0' top='0' pt='20px' zIndex='10'>
                <Button onClick={() => router.back()}>
                    <ArrowBackIcon sx={{ fontSize: `${isTablet ? '35px' : '50px'}` }} />
                </Button>
            </Box>

            {/* product Detail */}
            <Box display='flex' alignItems='center'
                flexDirection={`${isTablet ? 'column' : 'row'}`}
                justifyContent='center' gap={`${isTablet ? '40px' : '100px'}`} pt='90px'
            >

                {/* product Image */}
                <Box width={`${isTablet ? '80%' : '50%'}`} textAlign={`${isTablet ? 'center' : 'end'}`}>
                    <Image src={product.image} alt='productImage' width={340} height={380} />
                </Box>

                {/* Product information */}
                <Box width={`${isTablet ? '90%' : '50%'}`} pt={`${isTablet ? '0px' : '30px'}`}>

                    <Typography variant={`${isTablet ? 'h6' : 'h4'}`} component='h1' fontWeight={600}
                        mb={`${isTablet ? '0px' : '30px'}`}
                    >
                        {product.title}
                    </Typography>

                    <Box display='flex' alignItems='center' gap='30px' mb={`${isTablet ? '0px' : '20px'}`}>
                        <Typography variant='h6' component='h3' fontWeight={600}>
                            ${product.price}
                        </Typography>
                        <RatingStar
                            colors={{ mask: '#ff5400' }}
                            size={30}
                            id="123"
                            maxScore={5}
                            rating={product.rating.rate}
                        />
                    </Box>

                    {/* Buttons */}
                    <Box my={`${isTablet ? '10px' : '20px'}`} display='flex' alignItems='center'
                        justifyContent='flex-start'>
                        {hasWindow && QuantityCount(state, product.id) === 1 &&
                            <Box sx={{ cursor: 'pointer' }} onClick={removeHandler} >
                                <DeleteIcon sx={{
                                    fontSize: '33.2px',
                                    color: '#0288d1',
                                    "&:hover": { color: '#01579b' }
                                }} />
                            </Box>
                        }

                        {hasWindow && QuantityCount(state, product.id) > 1 &&
                            <Box sx={{ cursor: 'pointer' }} onClick={minusHandler} >
                                <IndeterminateCheckBoxIcon sx={{
                                    fontSize: '33.2px',
                                    color: '#0288d1',
                                    "&:hover": { color: '#01579b' }
                                }} />
                            </Box>}

                        {hasWindow && QuantityCount(state, product.id) > 0 &&
                            <Typography variant="h6" px='10px' fontWeight={600}>
                                {QuantityCount(state, product.id)}
                            </Typography>}

                        {hasWindow && IsInCart(state, product.id) ?

                            <Box sx={{ cursor: 'pointer' }} onClick={plusHandler}>
                                <AddBoxIcon sx={{
                                    fontSize: '33.2px',
                                    color: '#0288d1',
                                    "&:hover": { color: '#01579b' }
                                }} />
                            </Box>

                            :

                            <Button size="meduim" variant="contained"
                                color="productBtn" onClick={addHandler} >
                                <Typography variant='subtitle1' color='white'
                                    fontSize={{ xs: "12px", md: "14px" }}>
                                    Add to cart
                                </Typography>
                            </Button>}
                    </Box>

                    <Typography variant='body1' component='h3' fontWeight={600} mb='10px'>
                        Product Details
                    </Typography>

                    <Typography variant='body1' component='h3'
                        sx={{ wordSpacing: '5px', textAlign: 'revert', fontSize: '13px' }}>
                        {product.description}
                    </Typography>

                </Box>
            </Box>

        </Box>
    );
}

export default ProductDetail;

export const getServerSideProps = async (context) => {
    const { params } = context

    const result = await axios.get(`https://fakestoreapi.com/products/${params.productId}`)

    const data = result.data

    return {
        props: {
            product: data
        }
    }
}