
// components
import ContactUsForm from "../module/ContactUsModule/ContactUsForm";
import ContactUsHeader from "../module/ContactUsModule/ContactUsHeader";

// mui
import { Box } from "@mui/material";


function ContactUsPage() {
    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
        }}>

            <ContactUsHeader />
            <ContactUsForm />

        </Box>
    );
}

export default ContactUsPage;