
// components
import AboutUsHeader from '../module/AboutusPageModules/AboutUsHeader';
import LittleBoxes from '../module/AboutusPageModules/LittleBoxes';
import WeChanging from '../module/AboutusPageModules/WeChanging';
import CustomersSay from '../module/AboutusPageModules/CustomersSay';

// mui
import { Box } from '@mui/material';


function AboutUsPage() {

    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
        }}>

            <AboutUsHeader />
            <LittleBoxes />
            <WeChanging />
            <CustomersSay />

        </Box>
    );
}

export default AboutUsPage;