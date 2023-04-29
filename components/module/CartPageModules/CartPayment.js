
// mui
import { Box, Button, Typography } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../../redux/features/cartSlice";

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartPayment() {

    const { totalProcuts, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch()

    const clearHandler = () => {
        toast.success("Clear cart successfully !", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
        dispatch(clear());
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <Box sx={{
            maxWidth: '450px', minWidth: "320px",
            border: '1px solid gray',
            borderRadius: '7px', p: '20px',
            position: { xl: "sticky" }, top: '20px',
        }}>
            <ToastContainer />

            {/* Total Products */}
            <Box sx={{
                display: 'flex', alignItems: 'center',
                justifyContent: "space-between",
                gap: '10px', mb: '30px',
            }}>
                <Typography variant="body1" sx={{
                    fontWeight: "600",
                    fontSize: { xs: "14px", md: "15px" }
                }}>
                    Total Products
                </Typography>
                <Typography variant="body2" sx={{
                    fontWeight: "600",
                    fontSize: "17px"
                }}>
                    {totalProcuts}
                </Typography>
            </Box>

            {/* Total Payment */}
            <Box sx={{
                display: 'flex', alignItems: 'center',
                justifyContent: "space-between",
                gap: '10px', mb: '30px',
            }}>
                <Typography variant="body1" sx={{
                    fontWeight: "600",
                    fontSize: { xs: "14px", md: "15px" }
                }}>
                    Total Payment:
                </Typography>
                <Typography variant="body2" sx={{
                    fontWeight: "600",
                    fontSize: "17px"
                }}>
                    {totalPrice && `$ ${totalPrice}`}
                </Typography>
            </Box>

            {/* Buttons */}
            <Box sx={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '30px', mt: '50px',
            }}>
                <Button variant="contained"
                    color="warning"
                    onClick={clearHandler}
                    sx={{
                        width: "125px"
                    }}>

                    <Typography variant='subtitle1' sx={{
                        color: 'white', fontWeight: "500",
                        fontSize: "14px"
                    }}>
                        Cleare cart
                    </Typography>

                </Button>
                <Button variant="contained"
                    color="button"
                    sx={{
                        width: "140px"
                    }}>

                    <Typography variant='subtitle1' sx={{
                        color: 'white', fontWeight: "500",
                        fontSize: "14px"
                    }}>
                        Cheackout now
                    </Typography>

                </Button>
            </Box>

        </Box>
    );
}

export default CartPayment;