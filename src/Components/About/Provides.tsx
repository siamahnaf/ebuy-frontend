import { Box, Grid, Typography } from "@mui/material";

//SectionHEader
import SectionHeader from "Utilis/SectionHeader";

//Data
import ProvidesData from "Data/About/Provides.data";

//Styles
import styles from "Styles/About/Provides.styles";

const Provides = () => {
    return (
        <Box>
            <SectionHeader
                title="whatwe"
                abbreviation="provides?"
                description="We are try to make easy way shoping"
            />
            <Grid container spacing={4}>
                {ProvidesData?.length > 0 &&
                    ProvidesData.map((provide, i) => (
                        <Grid item {...{ md: 3, sm: 6, xxs: 12 }} key={i}>
                            <Box sx={styles.Container}>
                                <Box component="img" width="50px" src={provide.icon} alt="Provides" />
                                <Typography variant="h6" component="h6" sx={styles.Titlte}>
                                    {provide.title}
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.Description}>
                                    {provide.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Provides;