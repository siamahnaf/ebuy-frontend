import { Box, Grid, Stack, NoSsr, Typography } from "@mui/material";

//CounterUp
import CounterUp from "./Awards/Counterup";

//Data
import AwardsData from "Data/About/Awards.data";

//Styles
import styles from "Styles/About/Awards.styles";

const Awards = () => {
    return (
        <Box sx={styles.Container}>
            <Grid container spacing={2} sx={styles.Content}>
                {AwardsData?.length > 0 &&
                    AwardsData.map((award, i) => (
                        <Grid item {...{ smd: 2.4, sm: 4, xxs: 6 }} key={i} sx={{ textAlign: "center" }}>
                            <Stack direction="row" sx={{ justifyContent: "center" }}>
                                <Typography variant="h6" component="h6" sx={styles.Counts}>
                                    <CounterUp value={award.count} />
                                </Typography>
                                <Typography variant="h6" component="span" sx={styles.Counts}>
                                    +
                                </Typography>
                            </Stack>
                            <Typography variant="body1" component="p" sx={styles.Description}>
                                {award.title}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Awards;