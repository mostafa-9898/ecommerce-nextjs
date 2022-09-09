import { useEffect, useState } from "react";

// mui
import { Box, Fab, useMediaQuery } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';

const UP = () => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {


        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });


    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <box>
            {showTopBtn &&
                <Box sx={{
                    position: 'fixed', bottom: '40px', right: `${isTablet ? '30px' : '50px'}`
                }}>
                    <Fab onClick={goToTop} size="medium" color="primary">
                        <NavigationIcon />
                    </Fab>
                </Box>
            }
        </box>
    );
}

export default UP;