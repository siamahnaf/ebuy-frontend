import { useState } from "react";
import { Box, Typography, InputBase, InputLabel, ButtonBase, SvgIcon } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//All Icons
import { EyeIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Header/UserForm.styles";

//Types
type Inputs = {
    name: string;
    email: string;
    password: string;
}


const Register = () => {
    const [password, setPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
        reset()
    }
    const passwordHandler = () => {
        setPassword(!password)
    }
    return (
        <Box>
            <Typography variant="body1" component="p" sx={styles.TermsText}>
                By sing up, you agree to our terms & policy
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, mb: "10px" }}>
                <Box sx={{ mb: "5px" }}>
                    <InputLabel htmlFor="name" sx={styles.FormLabel}>
                        Name
                    </InputLabel>
                    <InputBase
                        id="name"
                        type="text"
                        {...register("name")}
                        sx={styles.FormInput}
                    />
                </Box>
                <Box sx={{ mb: "5px" }}>
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
                <Box sx={{ mb: "10px" }}>
                    <InputLabel htmlFor="password" sx={styles.FormLabel}>
                        Password
                    </InputLabel>
                    <Box sx={{ position: "relative" }}>
                        <InputBase
                            id="password"
                            type={password ? "text" : "password"}
                            {...register("password")}
                            sx={styles.FormInput}
                        />
                        <Box
                            className={password ? "visible" : ""}
                            onClick={passwordHandler}
                            sx={styles.EyIcon}
                        >
                            <SvgIcon viewBox="0 0 24 14">
                                {EyeIcon}
                            </SvgIcon>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <ButtonBase type="submit" sx={styles.SubmitButton}>
                        <Typography variant="body1" component="p">
                            Register
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;