import { Dispatch, SetStateAction, useState } from 'react';
import { Box, Stack, Typography, InputBase, InputLabel, ButtonBase, SvgIcon, FormControlLabel, Checkbox } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//All Icons
import { EyeIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Header/UserForm.styles";

//Types
interface Props {
    setRegister: Dispatch<SetStateAction<string>>
}
type Inputs = {
    email: string;
    password: string;
    remember: boolean;
}

const Login = ({ setRegister }: Props) => {
    const [password, setPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    const passwordHandler = () => {
        setPassword(!password)
    }
    return (
        <Box>
            <Typography variant="body1" component="p" sx={styles.TermsText}>
                Login with your email & password
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, mb: "10px" }}>
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
                <Box>
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
                <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
                    <Box sx={{ label: { span: { fontSize: "14px" } } }}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                            labelPlacement="end"
                            {...register("remember")}
                        />
                    </Box>
                    <Box
                        onClick={() => setRegister("forgetpass")}
                        sx={styles.ForgetPassword}
                    >
                        <ButtonBase disableRipple
                            disableTouchRipple>
                            Forget Password?
                        </ButtonBase>
                    </Box>
                </Stack>
                <Box>
                    <ButtonBase type="submit" sx={styles.SubmitButton}>
                        <Typography variant="body1" component="p">
                            Login
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;