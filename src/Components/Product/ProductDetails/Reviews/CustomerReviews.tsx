import { Box, Typography } from "@mui/material";

//Components
import Reviews from "Components/Common/Reviews";

//Styles
import styles from "Styles/Product/CustomerReviews.styles";

const CustomerReviews = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                Customer Reviews
            </Typography>
            <Reviews />
        </Box>
    );
};
export default CustomerReviews;