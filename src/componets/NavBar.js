import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    return (
        <AppBar position="fixed" className='nav-bar' sx={{ backgroundColor: '#00458B' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        component={'span'} variant={'body2'}
                        noWrap
                        className='title-nav-bar'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            className='box-cointener'
                            sx={{
                                width: '100vw',
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'left'
                            }}>
                            <Box className="contact-us" sx={{ flex: '1' }}>
                                <a target="_blank" href="tel:0525466443"> <PhoneIcon sx={{ ml: 2 }} /></a>
                                <a target="_blank" href="mailto:orit741@gmail.com"> <EmailIcon sx={{ ml: 2 }} /></a>
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=972525466443"> <WhatsAppIcon sx={{ ml: 2 }} /></a>
                            </Box>
                        </Box>
                    </Typography>
                    <Typography
                        component={'span'} variant={'body2'}
                        noWrap
                        className='title-nav-bar'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100vw',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'

                            }}>
                            <Box className="contact-us" >
                                <Box className="contact-us" sx={{ flex: '1' }}>
                                    <a target="_blank" href="tel:0525466443"> <PhoneIcon sx={{ ml: 2 }} /></a>
                                    <a target="_blank" href="mailto:orit741@gmail.com"> <EmailIcon sx={{ ml: 2 }} /></a>
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=972525466443"> <WhatsAppIcon sx={{ ml: 2 }} /></a>
                                </Box>

                            </Box>
                        </Box>

                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
