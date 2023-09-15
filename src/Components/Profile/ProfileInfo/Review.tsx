import { Box, Typography } from "@mui/material";

//Componenst
import Reviews from "Components/Common/Reviews";

//Styles
import styles from "Styles/Profile/Reviews.styles";

const Review = () => {
    return (
        <Box>
            <Box sx={styles.TabTitle}>
                <Typography variant="h6" component="h6">
                    Reviews
                </Typography>
            </Box>
            <Reviews />
        </Box>
    );
};
export default Review;