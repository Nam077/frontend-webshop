import React, { FunctionComponent } from 'react';
import { Box, styled, Typography } from '@mui/material';

interface User {
    name: string;
    email: string;
}
interface OwnProps {
    name: string;
    price: string;
    img: string;
    priceLicense: string;
    user: User;
}

type Props = OwnProps;

export const Font: FunctionComponent<Props> = (props) => {
    const FontBox = styled(Box)(({ theme }) => ({
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        borderRadius: '10px',
        maxWidth: 350,
        backgroundColor: '#fff',
        margin: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
    }));
    const InfoBox = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }));

    const ImgContainer = styled(Box)(() => ({
        width: '100%',
    }));
    return (
        <FontBox>
            <ImgContainer>
                <img src={props.img} alt="housePhoto" style={{ maxWidth: '100%' }} />
            </ImgContainer>

            <Box sx={{ padding: '1rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" sx={{ fontWeight: '700' }}>
                        {props.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: '700' }}>
                        ${props.price}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <InfoBox>
                        <Typography variant="body2" sx={{ fontWeight: '700' }}>
                            {props.user.name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: '700' }}>
                            {props.user.email}
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <Typography variant="body2" sx={{ fontWeight: '700' }}>
                            {props.priceLicense}
                        </Typography>
                    </InfoBox>
                </Box>
            </Box>
        </FontBox>
    );
};
