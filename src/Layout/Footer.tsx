import { Container, Grid } from "@mui/material";

// Components-- 4 Footer in one row
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import FooterFour from "Components/Footer/FooterFour";

//Styles
import styles from "Styles/Footer/Footer.styles";

const Footer = () => {
    return (
        <Container maxWidth="xxxl" disableGutters component="footer" sx={styles.FooterContainer}>
            <Grid container spacing={3}>
                <Grid item  {...{ md: 2.5, sm: 6, xxs: 6 }}>
                    <FooterOne />
                </Grid>
                <Grid item  {...{ md: 2.5, sm: 6, xxs: 6 }}>
                    <FooterTwo />
                </Grid>
                <Grid item  {...{ md: 3.5, sm: 6, xxs: 12 }}>
                    <FooterThree />
                </Grid>
                <Grid item  {...{ md: 3.5, sm: 6, xxs: 12 }}>
                    <FooterFour />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Footer;