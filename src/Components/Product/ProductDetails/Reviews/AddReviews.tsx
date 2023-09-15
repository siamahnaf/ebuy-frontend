import { Box, Typography, Rating, ButtonBase, InputBase } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//Styles
import styles from "Styles/Product/AddReviews.styles";

//Types
type Inputs = {
    comment: string
}

const AddReviews = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                Add Reviews
            </Typography>
            <Rating size="small" onChange={(e, value) => console.log(value)} />
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <InputBase
                    multiline
                    minRows={7}
                    placeholder="Write Comments"
                    {...register("comment")}
                    sx={styles.Textarea}
                />
                <Box>
                    <ButtonBase type="submit" sx={styles.SubmitButton}>
                        Submit Review
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};
export default AddReviews;