import React, { FunctionComponent, useState } from 'react';
import {
    Box,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Typography,
} from '@mui/material';
import logoImg from '../media/logo.png';
import { CustomButton } from './CustomButton';
import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
interface OwnProps {}

type Props = OwnProps;

export const Navbar: FunctionComponent<Props> = (props) => {
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });

    const toggleDrawer = (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor: string) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Features', 'Services', 'Listed', 'Contact'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <HomeIcon />}
                                {index === 1 && <FeaturedPlayListIcon />}
                                {index === 2 && <MiscellaneousServicesIcon />}
                                {index === 3 && <ListAltIcon />}
                                {index === 4 && <ContactsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: '14px',
        color: '#4F5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
        },
    }));

    const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            display: 'block',
        },
    }));

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled('img')(({ theme }) => ({
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    }));

    return (
        <NavbarContainer>
            <Box display="flex" alignItems="center" justifyContent="center" gap={'2.5rem'}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CustomMenuIcon onClick={toggleDrawer('left', true)} />
                    <Drawer anchor="left" open={mobileMenu['left']} onClose={toggleDrawer('left', false)}>
                        {list('left')}
                    </Drawer>
                    <Typography variant="h6" fontWeight="bold" color="#4F5361">
                        HaiNamCoin
                    </Typography>
                </Box>

                <NavbarLinksBox>
                    <NavLink variant={'body2'}>Home</NavLink>
                    <NavLink variant={'body2'}>Features</NavLink>
                    <NavLink variant={'body2'}>Services</NavLink>
                    <NavLink variant={'body2'}>Listed </NavLink>
                    <NavLink variant={'body2'}>Contact</NavLink>
                </NavbarLinksBox>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={'1rem'}>
                <NavLink variant={'body2'}>Login</NavLink>
                <NavLink variant={'body2'}>
                    <CustomButton backgroundColor={'#0F1B4C'} color={'#fff'} buttonText={'Register'} />
                </NavLink>
            </Box>
        </NavbarContainer>
    );
};
