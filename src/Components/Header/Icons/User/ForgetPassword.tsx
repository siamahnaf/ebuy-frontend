import { Box, Typography, InputBase, InputLabel, ButtonBase } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//Styles
import styles from "Styles/Header/UserForm.styles";

//Types
type Inputs = {
    email: string;
}

const ForgetPassword = () => {
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
            <Typography variant="body1" component="p" sx={styles.TermsText}>
                We&apos;ll send you a link to reset your password
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, mb: "10px" }}>
                <Box sx={{ mb: "10px" }}>
                    <InputLabel htmlFor="email" sx={styles.FormLabel}>
                        Email
                    </InputLabel>
                    <InputBase
                        id="email"
                        type="text"
                        {...register("email")}
                        sx={styles.FormInput}
                    />
                </Box>
                <Box>
                    <ButtonBase type="submit" sx={styles.SubmitButton}>
                        <Typography variant="body1" component="p">
                            Reset Password
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};

export default ForgetPassword;