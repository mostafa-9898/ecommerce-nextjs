import React, { useContext } from "react";
import Link from "next/link";

// context for light and dark mode
import { ColorModeContext } from "../theme/MUI_MODE";

// mui
import {
    Box,
    Button, Card, CardActionArea, CardActions
    , CardContent, CardMedia, Typography
} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

// redux
import { useDispatch, useSelector } from "react-redux";
import { IsInCart, QuantityCount } from "../helpers/functions";


const ProductCard = ({ product }) => {

    const { mode } = useContext(ColorModeContext)

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
        <>
            <Card sx={{
                width: 310, height: 420, backgroundColor: `${mode == 'dark' && '#212529'}`, borderRadius: '10px',
                "&:hover": { boxShadow: `${mode == 'dark' ? '0 0 7px 0 #FFFFFF' : '0 0 7px 0 #495057'}`, }
            }} >

                <Link href={`/products/${product.id}`}>
                    <CardActionArea>
                        <CardMedia sx={{
                            display: 'flex', alignItems: 'center', pt: '20px',
                            justifyContent: 'center', width: '100%', height: '100%',
                        }}>
                            <img src={product.image} width='230px' height='250px' />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body1" component="h2" fontWeight={600} mt='5px' mb='10px'>
                                {product.title.slice(0, 25)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                price: <span style={{ fontWeight: '600', fontSize: '15px', marginLeft: '5px' }}>${product.price}</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>

                <CardActions sx={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'flex-end', px: '20px'
                }}>

                    {hasWindow && QuantityCount(state, product.id) === 1 &&
                        <Box sx={{ cursor: 'pointer' }} onClick={removeHandler} >
                            <DeleteIcon sx={{
                                fontSize: '35px',
                                color: '#0288d1',
                                "&:hover": { color: '#01579b' }
                            }} />
                        </Box>
                    }

                    {hasWindow && QuantityCount(state, product.id) > 1 &&
                        <Box sx={{ cursor: 'pointer' }} onClick={minusHandler} >
                            <IndeterminateCheckBoxIcon sx={{
                                fontSize: '35px',
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
                                fontSize: '35px',
                                color: '#0288d1',
                                "&:hover": { color: '#01579b' }
                            }} />
                        </Box>

                        :

                        <Button size="small" variant="contained"
                            color="productBtn" onClick={addHandler} >
                            <Typography variant='subtitle1' color='white'
                                fontSize={{ xs: "12px", md: "14px" }}>
                                Add to cart
                            </Typography>
                        </Button>}



                </CardActions>

            </Card>
        </>
    );
}

export default ProductCard;