import { Box, Stack, Rating, Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//All Icons
import StarIcon from '@mui/icons-material/Star';

//Styles
import styles from "Styles/Product/ReviewSummery.styles";

const ReviewSummery = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                Review Summery
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center", mb: "15px" }}>
                <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={4}
                    readOnly
                    emptyIcon={<StarIcon fontSize="inherit" />}
                    sx={styles.Star}
                />
                <Typography variant="body1" component="p" sx={styles.RattingPointText}>
                    4.8 out of 5
                </Typography>
            </Stack>
            <Box>
                <Stack direction="row" sx={{ alignItems: "center", mb: "15px" }}>
                    <Typography variant="body1" component="p" sx={styles.ProgressText}>
                        5 star
                    </Typography>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={30}
                            sx={styles.ProgressBar}
                        />
                        <Box sx={{ ...styles.ProgressLabel, width: "30%" }}>
                            30%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "15px" }}>
                    <Typography variant="body1" component="p" sx={styles.ProgressText}>
                        5 star
                    </Typography>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={60}
                            sx={styles.ProgressBar}
                        />
                        <Box sx={{ ...styles.ProgressLabel, width: "60%" }}>
                            60%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "15px" }}>
                    <Typography variant="body1" component="p" sx={styles.ProgressText}>
                        5 star
                    </Typography>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={35}
                            sx={styles.ProgressBar}
                        />
                        <Box sx={{ ...styles.ProgressLabel, width: "35%" }}>
                            35%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "15px" }}>
                    <Typography variant="body1" component="p" sx={styles.ProgressText}>
                        5 star
                    </Typography>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={90}
                            sx={styles.ProgressBar}
                        />
                        <Box sx={{ ...styles.ProgressLabel, width: "90%" }}>
                            90%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Typography variant="body1" component="p" sx={styles.ProgressText}>
                        5 star
                    </Typography>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={80}
                            sx={styles.ProgressBar}
                        />
                        <Box sx={{ ...styles.ProgressLabel, width: "80%" }}>
                            80%
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Typography variant="body1" component="p">
                <Link href="/">
                    <A sx={styles.BottomLinkedText}>
                        How are ratings calculated?
                    </A>
                </Link>
            </Typography>
        </Box >
    );
};
export default ReviewSummery;

//Custom Component
const A = styled("a")``;