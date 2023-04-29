
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrease, increase, removeFromCart } from "../../redux/features/cartSlice";

// mui
import { Box, Button, IconButton, Typography } from "@mui/material";

// icons
import { HiPlusSmall, HiMinusSmall } from 'react-icons/hi2';
import {
    MdDeleteOutline
} from "react-icons/md";

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CardButtons({ product }) {

    const cartState = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const IsInCart = (cartState, id) => {
        // return true or false (!!)
        const result = cartState.selectedProducts && !!cartState.selectedProducts.find(item => item.id === id)
        return result
    }

    const QuantityCount = (cartState, id) => {
        // return the index of product
        const index = cartState.selectedProducts.findIndex(item => item.id === id)

        if (index === -1) {
            return false
        } else {
            return cartState.selectedProducts[index].quantity
        }
    }

    const notify = (notifyText) => toast.success(notifyText, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });

    return (
        <Box>
            <ToastContainer />
            {IsInCart(cartState, product.id) ? (

                <Box sx={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: "space-between", border: "1px solid #dee2e6",
                    borderRadius: "5px", width: "110px"
                }}>

                    {/* delete */}
                    {QuantityCount(cartState, product.id) === 1 &&
                        <IconButton size="small"
                            onClick={() => {
                                dispatch(removeFromCart(product));
                                notify("Deleted from cart successfully !")
                            }}>
                            <MdDeleteOutline style={{
                                fontSize: '24px',
                            }} />
                        </IconButton>}


                    {/* decrease */}
                    {QuantityCount(cartState, product.id) > 1 &&
                        <IconButton size="small"
                            onClick={() => dispatch(decrease(product))}>
                            <HiMinusSmall style={{
                                fontSize: '24px',
                            }} />
                        </IconButton>}

                    {/* quantity */}
                    <Typography variant="body1" sx={{
                        px: '10px', fontWeight: "600",
                        fontSize: "16px",
                    }}>
                        {QuantityCount(cartState, product.id)}
                    </Typography>

                    {/* increase */}
                    <IconButton size="small"
                        onClick={() => dispatch(increase(product))}>
                        <HiPlusSmall style={{
                            fontSize: '24px',
                        }} />
                    </IconButton>


                </Box>)


                :

                (<Box>
                    {/* add to cart */}
                    <Button size="small" variant="contained"
                        color="button"
                        onClick={() => {
                            dispatch(addToCart(product));
                            notify("Added to cart successfully !")
                        }}
                        sx={{
                            width: "110px", height: "36px",
                        }}>
                        <Typography variant='subtitle1' sx={{
                            fontSize: "14px", color: "white",
                            fontWeight: "500",
                        }}>
                            Add to cart
                        </Typography>
                    </Button>
                </Box>)
            }

        </Box>
    );
}

export default CardButtons;