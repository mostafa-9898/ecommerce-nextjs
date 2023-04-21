
// mui
import { Button, Typography } from "@mui/material";

// icons
import { HiOutlineArrowRight } from 'react-icons/hi';

function MyBtn({ href, textContent }) {
    return (
        <a href={href}
            style={{ textDecoration: "none" }}
        >
            <Button variant='contained' color='button' sx={{
                width: { xs: "100px", md: "120px", xl: "130px" },
                height: { xs: "32px", md: "37px", xl: "40px" },
            }}>

                <Typography variant='subtitle1' sx={{
                    color: 'white', fontWeight: "500",
                    mr: { xs: "4px", md: "5px", xl: "7px" },
                    fontSize: { xs: "11px", xl: "12px" },
                }}>
                    {textContent || "Shop now"}
                </Typography>

                <HiOutlineArrowRight color="white" fontSize={13} />

            </Button>
        </a>
    );
}

export { MyBtn };