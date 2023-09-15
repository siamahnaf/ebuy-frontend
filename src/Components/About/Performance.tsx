import { Box, Grid, Stack, Typography } from "@mui/material";

//data
import PerformanceData from "Data/About/Performance.data";

//Styles
import styles from "Styles/About/Performance.styles";

const Performance = () => {
    return (
        <Box sx={{ mt: "5em", mb: "3em" }}>
            <Grid container spacing={5} sx={{ alignItems: "center" }}>
                <Grid item {...{ xxxl: 3.5, xxl: 4, xl: 5, md: 6.5, xxs: 12 }}>
                    <Stack direction="row" sx={{ flexWrap: { sm: "unset", xxs: "wrap" } }}>
                        <Box sx={styles.smallImage}>
                            <Box component="img" src={PerformanceData.imageOne} alt="Image" />
                        </Box>
                        <Box sx={styles.largeImage}>
                            <Box component="img" src={PerformanceData.imageTwo} alt="Image" />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item {...{ xxxl: 7.5, xxl: 8, xl: 7, md: 5.5, xxs: 12 }}>
                    <Box sx={{ py: "1em" }}>
                        <Typography variant="h6" component="h6" sx={styles.HeaderTitle}>
                            {PerformanceData.title}
                        </Typography>
                        <Typography variant="h4" component="h4" sx={styles.Title}>
                            {PerformanceData.name}
                        </Typography>
                        <Typography variant="body1" component="p" sx={styles.Description}>
                            {PerformanceData.description} <br /><br />
                            {PerformanceData.subDescription}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ my: "15px" }}>
                {PerformanceData.performances.length > 0 &&
                    PerformanceData.performances.map((performance, i) => (
                        <Grid item key={i} {...{ lsm: 4, xxs: 12 }}>
                            <Typography variant="h4" component="h4" sx={styles.FaqTitle}>
                                {performance.name}
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.FaqDescription}>
                                {performance.description}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Performance;