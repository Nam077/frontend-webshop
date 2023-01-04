// @flow
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Container, styled, Typography } from '@mui/material';
import { Header } from '../components/Header';
type Props = {};
console.log(import.meta.env.VITE_BACKEND_URL);
export const Login = (props: Props) => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(2),
        },
    }));

    const CustomTextField = styled(TextField)(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E5E5E5',
            },
            '&:hover fieldset': {
                borderColor: '#E5E5E5',
            },
        },
    }));

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#000',
        padding: '0.5rem 1.25rem',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
        },
    }));

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                padding: '0 5rem',
            }}
        >
            <Header title={'Login'} />
            <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <CustomButton fullWidth variant="contained">
                Login
            </CustomButton>
        </Box>
    );
};
