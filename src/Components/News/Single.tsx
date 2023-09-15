import { Box, Stack, Typography, InputBase, ButtonBase } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

//All icons
import { RemoveRedEyeOutlined, ModeCommentOutlined, AccessTimeOutlined } from '@mui/icons-material';

//Components
import Reviews from "Components/Common/Reviews";

//Data
import SingleNewsData from "Data/News/Single.data";

//Styles
import styles from "Styles/News/Single.styles";

//Types
type Inputs = {
    comments: string;
}

const Single = () => {
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
            <Box>
                <Box sx={styles.Images}>
                    <Box component="img" src={SingleNewsData.image} alt="Single News" />
                </Box>
                <Typography variant="h6" component="h6" sx={styles.NewsTitle}>
                    {SingleNewsData.title}
                </Typography>
                <Stack direction="row">
                    <Typography variant="body1" component="p" sx={styles.ViewsAndComment}>
                        <RemoveRedEyeOutlined /> 22k
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.ViewsAndComment}>
                        <ModeCommentOutlined /> 45k
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.ViewsAndComment}>
                        <AccessTimeOutlined /> 11 Dec 2021
                    </Typography>
                </Stack>
                <Typography variant="body1" component="p" sx={styles.NewsDescription}>
                    {SingleNewsData.description}
                </Typography>
            </Box>
            <Box sx={{ mt: "2em" }}>

                <Typography variant="h5" component="h5" sx={styles.Title}>
                    Comments
                </Typography>
                <Reviews />
                <Box>
                    <Typography variant="h5" component="h5" sx={styles.Title}>
                        Add Comment
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <InputBase
                            multiline
                            minRows={7}
                            placeholder="Write Comments"
                            {...register("comments")}
                            sx={styles.Textarea}
                        />
                        <Box>
                            <ButtonBase type="submit" sx={styles.SubmitButton}>
                                Submit Comment
                            </ButtonBase>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default Single;