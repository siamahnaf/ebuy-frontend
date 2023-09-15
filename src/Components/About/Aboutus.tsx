import { Box, Grid, Typography } from "@mui/material";

//SectionHEader
import SectionHeader from "Utilis/SectionHeader";

//Components
import AboutCarousel from "./Aboutus/AboutCarousel";

//Data
import AboutUsData from "Data/About/Aboutus.data";

//Styles
import styles from "Styles/About/Aboutus.styles";

const Aboutus = () => {
    return (
        <Box>
            <SectionHeader
                title="About"
                abbreviation="Us"
                description="Know Us & And Fun"
            />
            <Grid container spacing={5}>
                <Grid item {...{ xxxl: 4, xxl: 4.5, xl: 4.8, md: 5, xxs: 12 }}>
                    <Box component="img" src={AboutUsData.image} alt="About" sx={styles.LeftImage} />
                </Grid>
                <Grid item {...{ xxxl: 8, xxl: 7.5, xl: 7.2, md: 7, xxs: 12 }}>
                    <Box sx={{ py: "1em" }}>
                        <Typography variant="h5" component="h5" sx={styles.Title}>
                            {AboutUsData.name}
                        </Typography>
                        <Typography variant="body1" component="p" sx={styles.Description}>
                            {AboutUsData.description} <br /><br />
                            {AboutUsData.details}
                        </Typography>
                        <AboutCarousel images={AboutUsData.images} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Aboutus;