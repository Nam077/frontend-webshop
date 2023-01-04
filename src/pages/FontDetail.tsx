// @flow
import React from 'react';
import { Box, Button, Card, Container, MenuItem, Select, styled, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { CustomButton } from '../components/CustomButton';
import heroImg from '../media/hero_illustration.png';
import TextField from '@mui/material/TextField';

interface User {
    id: number;
    name: string;
    email: string;
}
interface Font {
    id: number;
    name: string;
    price: string;
    img: string;
    priceLicense: string;
    user: User;
    totalBuy: number;
}

type Props = {};

export const FontDetail = (props: Props) => {
    const fontDemo: Font = {
        id: 1,
        name: 'NVN Sans',
        price: '100',
        img: 'https://picsum.photos/400/300',
        priceLicense: '200',
        user: {
            id: 1,
            name: 'John Doe',
            email: 'nam@nam.com',
        },
        totalBuy: 100,
    };
    const { id } = useParams();
    const [font, setFont] = React.useState<Font | null>(null);
    React.useEffect(() => {
        setFont(fontDemo);
    }, []);
    const [isEnterPrivateKey, setIsEnterPrivateKey] = React.useState(false);
    const handelBuy = () => {
        setIsEnterPrivateKey(!isEnterPrivateKey);
    };
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(2),
        },
    }));

    const ImageContainer = styled(Box)(({ theme }) => ({
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
    }));

    return (
        <Box sx={{ py: 10 }}>
            <Header title={`Font ${font?.name}`} />

            <CustomContainer>
                <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, width: '100%', padding: '20px' }}>
                    <CustomBox>
                        <Box sx={{ flex: '1' }}>
                            <img
                                src={font?.img}
                                alt="heroImg"
                                style={{ maxWidth: '80%', marginBottom: '2rem', borderRadius: '10px' }}
                            />
                        </Box>
                        <Box sx={{ flex: '1.25' }}>
                            <Typography
                                sx={{
                                    color: '#000339',
                                    fontSize: '35px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {font?.name}
                            </Typography>
                            <Typography
                                variant={'h6'}
                                sx={{
                                    backgroundColor: '#F5F5F5',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '10px',
                                    color: '#000339',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    marginTop: '1rem',
                                }}
                            >
                                By: {font?.user.name}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#5A6473',
                                    fontSize: '16px',
                                    mt: 2,
                                }}
                            >
                                Font is a visual representation of a text. It is a set of characters that are designed
                                to be used together. The font is a set of characters that are designed to be used
                                together.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 1, mt: 4 }}>
                                <Typography
                                    variant={'h6'}
                                    sx={{
                                        backgroundColor: '#F5F5F5',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '10px',
                                        color: '#000339',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        minWidth: 'calc(100% / 3 - 1rem)',
                                    }}
                                >
                                    Price: {font?.price} HNC
                                </Typography>
                                <Typography
                                    variant={'h6'}
                                    sx={{
                                        backgroundColor: '#F5F5F5',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '10px',
                                        color: '#000339',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        minWidth: 'calc(100% / 3 - 1rem)',
                                    }}
                                >
                                    Price License: {font?.priceLicense} HNC
                                </Typography>
                                <Typography
                                    variant={'h6'}
                                    sx={{
                                        backgroundColor: '#F5F5F5',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '10px',
                                        color: '#000339',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        minWidth: 'calc(100% / 3 - 1rem)',
                                    }}
                                >
                                    Total Buy: {font?.totalBuy}
                                </Typography>
                            </Box>

                            <Button
                                onClick={() => handelBuy()}
                                variant={'contained'}
                                sx={{ mt: 4, backgroundColor: '#000339', color: '#fff', padding: '0.5rem 1rem' }}
                            >
                                Buy Font
                            </Button>
                        </Box>
                    </CustomBox>
                </Card>
                {isEnterPrivateKey && (
                    <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                        <TextField label="Private Key" variant="outlined" />
                        <Box sx={{ display: 'flex' }}>
                            <Button variant={'contained'} sx={{ mt: 4, backgroundColor: '#000339', color: '#fff' }}>
                                Send
                            </Button>
                        </Box>
                    </Card>
                )}
            </CustomContainer>
        </Box>
    );
};
