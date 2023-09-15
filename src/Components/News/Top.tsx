import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Data
import TopData from "Data/News/Top.data";

//Styles
import styles from "Styles/News/Newses.styles";

const Colors = ["#AC8AFF", "#89DF7C", "#95C4E2", "#EE4E36", "#3699DC", "#77665E", "#F7C12B", "#02AD61", "#536D7A", "#FBBA9C"];

const Top = () => {
    return (
        <Box sx={styles.TopContainer}>
            <Grid container spacing={{ md: 2, xxs: 4 }} alignItems="center">
                <Grid item {...{ md: 0, smd: 12 }} sx={{ display: { md: "none", xxs: "block" } }}>
                    <Box sx={styles.Image} component="img" src={TopData.image} alt="top news" />
                </Grid>
                <Grid item {...{ lg: 6.5, md: 7, smd: 12 }}>
                    <Box>
                        <Box sx={styles.Category}>
                            {TopData.category.map((item, i) => (
                                <Typography variant="body1" component="span" key={i}
                                    sx={{ bgcolor: Colors[i] }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                        <Typography variant="h5" component="h5" sx={styles.Title}>
                            {TopData.title}
                        </Typography>
                        <Typography variant="body1" component="p" sx={styles.Description}>
                            {TopData.description}
                        </Typography>
                        <ButtonBase sx={styles.Button}>
                            <Link href="/news/top">
                                <a>View</a>
                            </Link>
                        </ButtonBase>
                    </Box>
                </Grid>
                <Grid item {...{ lg: 1, xxs: 0 }} sx={{ display: { lg: "block", xxs: "none" } }} />
                <Grid item {...{ lg: 4.5, md: 5, smd: 0 }} sx={{ display: { md: "block", xxs: "none" } }}>
                    <Box sx={styles.Image} component="img" src={TopData.image} alt="top news" />
                </Grid>
            </Grid>
        </Box >
    );
};
export default Top;