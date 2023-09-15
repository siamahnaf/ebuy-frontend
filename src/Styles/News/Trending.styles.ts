import { Theme } from "@mui/material/styles";

export default {
    SecTitle: {
        fontSize: {
            xxxl: "22px",
            xxl: "21px",
            msm: "20px",
            xxs: "19px"
        },
        fontWeight: 600,
        mb: "18px"
    },
    Category: {
        mt: "15px",
        span: {
            mr: "10px",
            p: "5px 13px",
            borderRadius: "3px",
            color: "background.default",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            }
        }
    },
    Title: {
        fontSize: {
            xxxl: "24px",
            xxl: "23px",
            md: "22px",
            smd: "16px",
            sm: "20px",
            xxs: "17px"
        },
        lineHeight: 1.5,
        py: "20px",
        fontWeight: 700,
    },
    Button: {
        color: "background.default",
        a: {
            textDecoration: "none",
            color: "primary.gray_secondary",
            fontWeight: 600,
            border: (theme: Theme) => `1px solid ${theme.palette.primary.gray_secondary}`,
            p: "8px 40px",
            borderRadius: "4px",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
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
        borderRadius: "12px"
    }
}