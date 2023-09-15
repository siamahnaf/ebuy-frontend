import { Box, Grid, Stack, Typography } from "@mui/material";

//Data
import ClipData from "Data/Common/Clip.data";

//Styles
import styles from "Styles/Common/Clip.styles";

const Clip = () => {
    return (
        <Grid container columnSpacing={{ lg: 7, md: 2, smd: 3, msm: 2, sm: 1, xxs: 2 }} rowSpacing={{ smd: 3, msm: 2, sm: 1, xxs: 2 }}>
            {ClipData &&
                ClipData.map((clip, i) => (
                    <Grid item {...{ md: 3, msm: 6, sm: 6, xxs: 12 }} key={i}>
                        <Stack direction="row" sx={styles.Container}>
                            <Box sx={styles.Image}>
                                <Box component="img" alt="Clip" src={clip.icon} />
                            </Box>
                            <Box>
                                <Typography variant="body1" component="p" sx={styles.Title}>
                                    {clip.title}
                                </Typography>
                                <Typography variant="body1" component="span" sx={styles.Description}>
                                    {clip.abbreviation}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                ))
            }
        </Grid>
    );
};
export default Clip;