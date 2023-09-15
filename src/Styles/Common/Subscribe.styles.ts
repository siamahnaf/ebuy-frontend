//Background Imagge
import SubscribeBg from "Assets/Subsribe.png";
import { keyframes } from "@emotion/react";

const iconEffect = keyframes`
    0% {opacity: 1}
    50% {opacity: 0}
    100% {opacity: 1}
`

export default {
    SubscribeContainer: {
        background: `url('${SubscribeBg}')`,
        backgroundPosition: "top right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "25px",
        my: "4.5em",
        py: {
            xxxl: "9em",
            xxl: "8em",
            xl: "5em",
            lg: "4em",
            md: "3.5em",
            smd: "3em",
            msm: "2.5em",
            sm: "2em",
            xxs: "1.5em"
        },
        px: {
            xxxl: "6em",
            lg: "5em",
            md: "2em",
            smd: "2em",
            msm: "1.8em",
            sm: "1.5em",
            xxs: "1.2em"
        }
    },
    Content: {
        width: {
            xxxl: "55%",
            xxl: "50%",
            xl: "45%",
            md: "50%",
            smd: "60%",
            lsm: "70%",
            msm: "80%",
            sm: "85%",
            xxs: "100%"
        }
    },
    SubTitle: {
        color: "text.primary",
        fontWeight: 600,
        fontSize: {
            xxxl: "56px",
            xxl: "55px",
            xl: "45px",
            lg: "36px",
            msm: "28px",
            sm: "25px",
            xxs: "22px"
        },
        lineHeight: 1.2,
        mb: "25px"
    },
    SubDescription: {
        color: "text.primary",
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            lg: "18px",
            md: "16px",
            sm: "15px",
            xxs: "14px"
        },
        mb: "30px"
    },
    InputField: {
        bgcolor: "background.default",
        p: "12px 20px",
        borderRadius: "7px",
        fontSize: {
            xxxl: "18px",
            xxl: "17px",
            md: "15px",
            msm: "14px",
            sm: "13px",
            xxs: "12px"
        },
        width: "74%",
        overflow: "hidden",
        input: {
            "::-ms-input-placeholder": {
                color: "text.primary"
            },
            "::placeholder": {
                color: "text.primary",
                opacity: 1
            },
            ":-ms-input-placeholder": {
                color: "text.primary"
            }
        },
        svg: {
            transition: "0.4s cubic-bezier(0.545, 0, 0.05, 1)"
        },
        "&.Mui-focused": {
            svg: {
                transform: "translate(45px, -45px)"
            }
        }
    },
    PlaneIcon: {
        color: "primary.plane",
        svg: {
            fontSize: {
                msm: "1.5rem",
                sm: "1.4rem",
                xxs: "1.2rem"
            }
        }
    },
    SubmitButton: {
        bgcolor: "primary.main",
        color: "background.default",
        ml: "-15px",
        px: {
            xxxl: "35px",
            xxl: "28px",
            xl: "20px",
            xxs: "18px"
        },
        textTransform: "capitalize",
        borderRadius: "6px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            sm: "14px",
            xxs: "12px"
        },
        fontWeight: 500
    }
}