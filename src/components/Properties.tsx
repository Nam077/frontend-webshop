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
                        Featured Properties
                    </Typography>
                    <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1 }}>
                        Everything you need to know when looking for a new home!
                    </Typography>
                </PropertiesTextBox>

                <PropertiesGrid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from({ length: 4 }, () => (
                        <Grid>
                            <Font
                                key={Math.random()}
                                img={'https://picsum.photos/400/300'}
                                name={'Font Name'}
                                price={'100'}
                                priceLicense={'200'}
                                user={{
                                    name: 'John Doe',
                                    email: 'nam@name.com',
                                }}
                            />
                        </Grid>
                    ))}
                </PropertiesGrid>
            </Container>
        </Box>
    );
};
