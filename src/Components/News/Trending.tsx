import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Data
import TrendingData from "Data/News/Trending.data";

//Styles
import styles from "Styles/News/Trending.styles";

const Colors = ["#AC8AFF", "#89DF7C", "#95C4E2", "#EE4E36", "#3699DC", "#77665E", "#F7C12B", "#02AD61", "#536D7A", "#FBBA9C"];

const Trending = () => {
    return (
        <Box sx={{ mt: "4em" }}>
            <Typography variant="h6" component="h6" sx={styles.SecTitle}>
                Trending
            </Typography>
            <Grid container spacing={{ lg: 7, xxs: 4 }}>
                {TrendingData.map((trending, i) => (
                    <Grid key={i} item {...{ smd: 4, xxs: 12 }}>
                        <Box>
                            <Box width="100%" component="img" src={trending.image} alt={trending.title} />
                            <Box sx={styles.Category}>
                                {trending.category.map((item, i) => (
                                    <Typography variant="body1" component="span" sx={{ bgcolor: Colors[i] }} key={i}>
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                            <Typography variant="h6" component="h6" sx={styles.Title}>
                                {trending.title}
                            </Typography>
                            <ButtonBase sx={styles.Button}>
                                <Link href={`/news/${i}`}>
                                    <a>View</a>
                                </Link>
                            </ButtonBase>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
export default Trending;