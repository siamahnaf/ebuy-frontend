import { Box, Typography, InputAdornment, Stack, InputBase, ButtonBase, SvgIcon } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//All Icons
import { PlaneIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Common/Subscribe.styles";

//Types
type Inputs = {
    email: string;
}

const Subscribe = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmt: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    return (
        <Box sx={styles.SubscribeContainer}>
            <Box sx={styles.Content}>
                <Typography variant="h4" component="h4" sx={styles.SubTitle}>
                    Stay home & get your needs from our shop
                </Typography>
                <Typography variant="body1" component="p" sx={styles.SubDescription}>
                    Save up to 50% off on your first order
                </Typography>
                <Stack
                    component="form"
                    direction="row"
                    onSubmit={handleSubmit(onSubmt)}
                >
                    <InputBase
                        id="outlined-basic"
                        placeholder="Your email address"
                        required
                        sx={styles.InputField}
                        startAdornment={(
                            <InputAdornment position="start" sx={styles.PlaneIcon}>
                                <SvgIcon>
                                    {PlaneIcon}
                                </SvgIcon>
                            </InputAdornment>
                        )}
                        {...register("email")}
                    />
                    <ButtonBase type="submit" sx={styles.SubmitButton}>
                        Subscribe
                    </ButtonBase>
                </Stack>
            </Box>
        </Box>
    );
};
export default Subscribe;