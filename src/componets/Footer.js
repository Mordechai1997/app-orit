import { Box, Container, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#00458B",
                paddingTop: "1rem",
                marginTop: "50px",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                            <Typography color="#fff" variant="h5">
                                לשיחת ייעוץ ללא עלות ניתן ליצור קשר
                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="#fff" variant="subtitle1">
                            <Box className="contact-us" sx={{ marginTop: "15px", flex: '1' }}>
                                <a target="_blank" href="tel:0525466443"> <PhoneIcon sx={{ ml: 2 }} /></a>
                                <a target="_blank" href="mailto:orit741@gmail.com"> <EmailIcon sx={{ ml: 2 }} /></a>
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=972525466443"> <WhatsAppIcon sx={{ ml: 2 }} /></a>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;