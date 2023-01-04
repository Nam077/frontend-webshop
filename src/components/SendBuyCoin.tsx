// @flow
import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Card } from '@mui/material';

type Props = {
    type: string;
};
export const SendBuyCoin = (props: Props) => {
    const [privateKey, setPrivateKey] = React.useState('');
    return (
        <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <TextField
                label="Private Key"
                variant="outlined"
                onChange={(e) => setPrivateKey(e.target.value)}
                value={privateKey}
            />
            <Box sx={{ display: 'flex' }}>
                <Button variant={'contained'} sx={{ mt: 4, backgroundColor: '#000339', color: '#fff' }}>
                    Send
                </Button>
            </Box>
        </Card>
    );
};
