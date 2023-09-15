import { Grid } from "@mui/material";

//Components
import CustomerReviews from "./Reviews/CustomerReviews";
import AddReviews from "./Reviews/AddReviews";
import ReviewSummery from "./Reviews/ReviewSummery";

const Reviews = () => {
    return (
        <Grid container spacing={5}>
            <Grid item {...{ md: 8, xxs: 12 }}>
                <CustomerReviews />
                <AddReviews />
            </Grid>
            <Grid item {...{ md: 4, xxs: 12 }}>
                <ReviewSummery />
            </Grid>
        </Grid>
    );
};
export default Reviews;