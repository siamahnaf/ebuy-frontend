import { Box, Grid, List, ListItem, ButtonBase, Typography, SvgIcon } from "@mui/material";
import Link from "next/link";

//All icons
import { FacebookIcon, LinkedInIcon } from "Utilis/Icons";
import { Twitter, Instagram } from '@mui/icons-material';

//SectionHeader
import SectionHeader from "Utilis/SectionHeader";

//Components
import Carousel from "./Team/Carousel";

//Data
import TeamData from "Data/About/Team.data";

//Styles
import styles from "Styles/About/Team.styles";

const Team = () => {
    return (
        <Box>
            <SectionHeader
                title="Team"
                abbreviation="Members"
                description="We are expert from Ebuy World"
            />
            <Box sx={{ mb: "6em" }}>
                <Grid container spacing={7}>
                    <Grid item {...{ xxxl: 7, xxl: 6, xl: 5.5, md: 5, xxs: 12 }}>
                        <Box sx={{ my: "1em" }}>
                            <Typography variant="h6" component="h6" sx={styles.HeaderTitle}>
                                {TeamData.subTitle}
                            </Typography>
                            <Typography variant="h5" component="h5" sx={styles.Title}>
                                {TeamData.title}
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.Description}>
                                {TeamData.description} <br /><br />
                                {TeamData.subDescription}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item {...{ xxxl: 5, xxl: 6, xl: 6.5, md: 7, xxs: 12 }}>
                        <Carousel />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Team;