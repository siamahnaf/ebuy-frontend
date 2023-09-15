import { useState, useEffect } from "react";
import { Box, Dialog, DialogContent, ButtonBase, Typography, SvgIcon } from "@mui/material";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ReactFacebookFailureResponse } from "react-facebook-login";

//All icons
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import { GoogleIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/Logo.png";


//All Componnets
import Register from "./User/Register";
import Login from "./User/Login";
import FogetPassword from "./User/ForgetPassword";

//Styles
import styles from "Styles/Header/User.styles";

//Types
interface Props {
    handleClose: () => void;
    open: boolean;
}

const User = ({ handleClose, open }: Props) => {
    const [register, setRegister] = useState<string>("signup");
    const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(response);
    }
    const responseFacebook = (response: ReactFacebookFailureResponse) => {
        console.log(response);
    }
    useEffect(() => {
        if (open === true) {
            setRegister("signup")
        }
    }, [open])
    const RemovePadding = () => {
        const header: HTMLElement | null = document.querySelector('header')!;
        header.style.paddingRight = "0";
    }
    return (
        <Dialog
            onClose={handleClose}
            open={open}
            fullWidth
            maxWidth="xs"
            scroll="body"
            TransitionProps={{
                onExited: () => {
                    RemovePadding();
                }
            }}
            sx={{
                zIndex: "999999999999999",
                "& .MuiPaper-root": {
                    overflow: "unset",
                    py: "10px"
                }
            }}
        >
            <DialogContent>
                <ButtonBase onClick={handleClose} sx={styles.CloseBtn}>
                    <CloseIcon />
                </ButtonBase>
                <Box sx={{ textAlign: "center" }}>
                    <Box component="img" width="25%" src={Logo} alt="Logo" />
                </Box>
                {register === "signup" &&
                    <Register />
                }
                {register === "login" &&
                    <Login setRegister={setRegister} />
                }
                {register === "forgetpass" &&
                    <FogetPassword />
                }
                <Box>
                    <Box sx={styles.OrText}>
                        <Typography variant="body1" component="p" className="OrTectst">
                            Or
                        </Typography>
                    </Box>
                    {register !== "forgetpass" &&
                        <>
                            <Box>
                                <FacebookLogin
                                    appId="970693463528190"
                                    autoLoad={false}
                                    render={renderProps => (
                                        <ButtonBase onClick={renderProps.onClick} sx={styles.FacebookLogin}>
                                            <FacebookIcon />
                                            Login with Facebook
                                        </ButtonBase>
                                    )}
                                    callback={responseFacebook}
                                />
                            </Box>
                            <Box>
                                <GoogleLogin
                                    clientId="1063277909607-ngqp62i2rigm60bdivl2o63sadu2rhm9.apps.googleusercontent.com"
                                    buttonText="Login"
                                    render={renderProps => (
                                        <ButtonBase onClick={renderProps.onClick} sx={styles.GoogleLogin}>
                                            <SvgIcon>
                                                {GoogleIcon}
                                            </SvgIcon>
                                            Login with Google
                                        </ButtonBase>
                                    )}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                />
                            </Box>
                        </>
                    }
                </Box>
                {register === "signup" &&
                    <Typography variant="body1" component="p" sx={styles.BottomText}>
                        Already have an account? {" "}
                        <ButtonBase
                            disableRipple
                            disableTouchRipple
                            onClick={() => setRegister("login")}
                        >
                            Login
                        </ButtonBase>
                    </Typography>
                }
                {register === "login" &&
                    <Typography variant="body1" component="p" sx={styles.BottomText}>
                        Don&apos;t have any account? {" "}
                        <ButtonBase
                            disableRipple
                            disableTouchRipple
                            onClick={() => setRegister("signup")}
                        >
                            Register
                        </ButtonBase>
                    </Typography>
                }
                {register === "forgetpass" &&
                    <Typography variant="body1" component="p" sx={styles.BottomText}>
                        Back to {" "}
                        <ButtonBase
                            disableRipple
                            disableTouchRipple
                            onClick={() => setRegister("login")}
                        >
                            Login
                        </ButtonBase>
                    </Typography>
                }
            </DialogContent>
        </Dialog>
    );
};

export default User;