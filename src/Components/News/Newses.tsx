import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Data
import NewsData from "Data/News/News.data";

//Styles
import styles from "Styles/News/Newses.styles";


const Colors = ["#AC8AFF", "#89DF7C", "#95C4E2", "#EE4E36", "#3699DC", "#77665E", "#F7C12B", "#02AD61", "#536D7A", "#FBBA9C"];

const Newses = () => {
    return (
        <Box sx={styles.Container}>
            {NewsData.map((news, i) => (
                <Grid container spacing={2} key={i} sx={{ mb: "2em" }} alignItems="center">
                    <Grid item {...{ md: 0, smd: 12 }} sx={{ display: { md: "none", xxs: "block" } }}>
                        <Box sx={styles.Image} component="img" src={news.image} alt="top news" />
                    </Grid>
                    <Grid item {...{ lg: 6.5, md: 7 }}>
                        <Box>
                            <Box sx={styles.Category}>
                                {news.category.map((item, i) => (
                                    <Typography variant="body1" component="span" key={i} sx={{ bgcolor: Colors[i] }}>
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                            <Typography variant="h5" component="h5" sx={styles.Title}>
                                {news.title}
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.Description}>
                                {news.description}
                            </Typography>
                            <ButtonBase sx={styles.Button}>
                                <Link href={`/news/${i}`}>
                                    <a>View</a>
                                </Link>
                            </ButtonBase>
                        </Box>
                    </Grid>
                    <Grid item {...{ lg: 1, xxs: 0 }} sx={{ display: { lg: "block", xxs: "none" } }} />
                    <Grid item {...{ lg: 4.5, md: 5, smd: 0 }} sx={{ display: { md: "block", xxs: "none" } }}>
                        <Box sx={styles.Image} component="img" src={news.image} alt="top news" />
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
};
export default Newses;