import React, { FunctionComponent } from 'react';
import { Box, Container, Grid, styled, Typography } from '@mui/material';
import { Font } from './Font';
interface OwnProps {}

type Props = OwnProps;

export const Properties: FunctionComponent<Props> = (props) => {
    const PropertiesGrid = styled(Grid)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));

    const PropertiesTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    }));

    return (
        <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 10 }}>
            <Container>
                <PropertiesTextBox>
                    <Typography sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold' }}>
                        Font Library
                    </Typography>
                    <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1 }}>
                        We have a large collection of fonts for you to choose from
                    </Typography>
                </PropertiesTextBox>

                <PropertiesGrid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from({ length: 21 }).map((_, index) => (
                        <Grid key={Math.random()}>
                            <Font
                                id={index}
                                img={'https://picsum.photos/400/300'}
                                name={'NVN Sans'}
                                price={'100'}
                                priceLicense={'200'}
                                user={{
                                    name: 'John Doe',
                                    email: 'nam@name.com',
                                }}
                                isBuy={Math.random() > 0.5}
                            />
                        </Grid>
                    ))}
                </PropertiesGrid>
            </Container>
        </Box>
    );
};
