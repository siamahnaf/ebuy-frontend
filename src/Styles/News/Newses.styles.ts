import { Theme } from "@mui/material/styles";

export default {
    Container: {
        px: {
            xxxl: "15%",
            xxl: "10%",
            xxs: "0%"
        },
        mt: "6em"
    },
    TopContainer: {
        px: {
            xxxl: "15%",
            xxl: "10%",
            xxs: "0%"
        }
    },
    Category: {
        mb: "20px",
        span: {
            mr: "10px",
            p: "5px 13px",
            borderRadius: "3px",
            color: "background.default",
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            }
        }
    },
    Title: {
        fontSize: {
            xxxl: "36px",
            xxl: "33px",
            msm: "30px",
            sm: "29px",
            xxs: "22px"
        },
        lineHeight: 1.5,
        fontWeight: 700,
    },
    Description: {
        my: "30px",
        color: "primary.gray_secondary",
        fontSize: {
            xxxl: "18px",
            xxl: "16px",
            msm: "14px",
            xxs: "13px"
        }
    },
    Button: {
        color: "background.default",
        a: {
            textDecoration: "none",
            color: "primary.gray_secondary",
            fontWeight: 600,
            border: (theme: Theme) => `1px solid ${theme.palette.primary.gray_secondary}`,
            p: {
                xxxl: "14px 45px",
                xxl: "12px 40px",
                xxs: "8px 35px"
            },
            borderRadius: "4px",
            fontSize: {
                xxxl: "18px",
                xxl: "16px",
                msm: "14px",
                xxs: "13px"
            },
            transition: "0.2s ease",
            "&:hover": {
                bgcolor: "primary.main",
                color: "background.default"
            }
        }
    },
    Image: {
        width: "100%",
        borderRadius: "10px"
    }
}