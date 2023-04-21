import Link from "next/link";

// mui
import { Typography } from "@mui/material";

function Logo() {
    return (
        <Link href="/">
            <Typography
                variant="h3"
                color='#998e76'
                fontWeight={700}
                fontFamily={"Dancing Script"}
                sx={{
                    cursor: "pointer",
                    fontSize: { xs: "24px", md: "32px", xl: "40px" }
                }}
            >
                ecoShop
            </Typography>
        </Link>
    );
}

export default Logo;