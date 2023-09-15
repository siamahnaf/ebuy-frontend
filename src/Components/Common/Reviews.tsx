import { Box, Stack, Rating, Typography } from "@mui/material";

//All Icons
import StarIcon from '@mui/icons-material/Star';

//Data
import ReviewsData from "Data/Common/Reviews.data";

//Styles
import styles from "Styles/Common/Reviews.styles";

const Reviews = () => {
    return (
        <Box>
            {ReviewsData &&
                ReviewsData.map((review, i) => (
                    <Stack
                        direction="row"
                        key={i}
                        sx={{
                            ml: {
                                sm: (i + 1) % 2 == 0 ? "30px" : "0px",
                                xxs: "0px"
                            }, ...styles.ReviewBox
                        }}
                    >
                        <Box sx={styles.ImageBox}>
                            <Box component="img" src={review.image} alt={review.name} />
                            <Typography variant="body1" component="p">
                                {review.name}
                            </Typography>
                        </Box>
                        <Box>
                            <Stack direction="row" sx={{ alignItems: "center", mb: "10px", flexWrap: { sm: "unset", xxs: "wrap" } }}>
                                <Typography variant="body1" component="p" sx={styles.Date}>
                                    {review.time}
                                </Typography>
                                <Box sx={{ textAlign: "right", flex: 1 }}>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={5}
                                        precision={4}
                                        readOnly
                                        emptyIcon={<StarIcon fontSize="inherit" />}
                                        sx={styles.Star}
                                    />
                                </Box>
                            </Stack>
                            <Box>
                                <Typography variant="body1" component="p" sx={styles.Comments}>
                                    {review.comment}
                                </Typography>
                            </Box>
                        </Box>
                    </Stack >
                ))
            }
        </Box >
    );
};
export default Reviews;