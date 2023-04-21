
// component
import RegisterPage from '../components/template/RegisterPage';

// mui
import { Box } from '@mui/material';


const Register = () => {
    return (
        <Box sx={{
            maxWidth: '1576px', m: 'auto', px: { xs: "20px", xl: "50px" },
        }}>
            <RegisterPage />
        </Box>
    );
}

export default Register;