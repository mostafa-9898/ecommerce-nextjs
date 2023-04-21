import { useEffect, useState } from "react";

// mui
import { Box } from "@mui/material";

// icon
import { IoIosArrowUp } from 'react-icons/io'

const UP = () => {

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
        <Box>
            {showTopBtn &&
                <Box sx={{
                    position: 'fixed', bottom: '40px',
                    right: { xs: "30px", xl: "30px", xxl: "80px" },
                    zIndex: "10"
                }}>
                    <Box onClick={goToTop} sx={{
                        width: "40px", height: "40px", backgroundColor: "#4d7c8a",
                        ":hover": { backgroundColor: "#264653" }, transition: 'all .2s linear',
                        borderRadius: "5px",
                        display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                        <IoIosArrowUp style={{
                            fontSize: "40px", color: "white", cursor: "pointer",
                        }} />
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default UP;