import { Theme } from "@mui/material/styles";

export default {
    TermsText: {
        textAlign: "center",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        },
        color: "primary.main_tartiary"
    },
    FormLabel: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            xxs: "15px"
        },
        mb: "8px",
        ml: "2px",
        color: "text.primary"
    },
    FormInput: {
        width: "100%",
        borderRadius: "4px",
        p: "2px 10px",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`
    },
    SubmitButton: {
        bgcolor: "primary.main",
        color: "background.default",
        width: "100%",
        mt: "10px",
        py: "10px",
        borderRadius: "3px",
        "& p": {
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                xxs: "14px"
            },
            fontWeight: 600
        }
    },
    EyIcon: {
        position: "absolute",
        right: "0",
        top: "55%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        svg: {
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                xxs: "20px"
            },
            color: "black_opacity"
        },
        "&.visible": {
            svg: {
                color: "primary.main"
            }
        }
    },
    ForgetPassword: {
        flex: 1,
        textAlign: "right",
        cursor: "pointer",
        button: {
            fontWeight: 600,
            cursor: "pointer",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                xxs: "14px"
            },
            textDecoration: "underline",
            mb: "3px"
        }
    }
}