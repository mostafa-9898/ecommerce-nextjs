
// mui
import { Button, Typography } from "@mui/material";

// icons
import { HiOutlineArrowRight } from 'react-icons/Hi';

function MyBtn({ href, textContent }) {
    return (
        <a href={href}
            style={{ textDecoration: "none" }}
        >
            <Button variant='contained' color='button'
                sx={{
                    width: { xs: "100px", md: "110px", xl: "130px" },
                    height: { xs: "32px", md: "37px", xl: "42px" }
                }}>

                <Typography variant='subtitle1' color='white'
                    fontWeight={500} fontSize={{ xs: "10px", md: "13px" }}
                    mr="5px"
                >
                    {textContent || "Shop now"}
                </Typography>

                <><HiOutlineArrowRight color="white" /></>

            </Button>
        </a>
    );
}

export { MyBtn };