import { Theme } from "@mui/material/styles";

export default {
    Text: {
        h6: {
            fontWeight: 600,
            color: "primary.gray_tertiary",
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            }
        },
        h5: {
            fontSize: {
                xxxl: "32px",
                xxl: "31px",
                msm: "30px",
                xxs: "29px"
            },
            fontWeight: 600,
            mb: "5px"
        },
        "& p": {
            fontWeight: 300,
            mb: "25px",
            color: "primary.gray_secondary",
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            }
        }
    },
    InputBase: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.gray_primary}`,
        width: "100%",
        bgcolor: "primary.gray_primary",
        borderRadius: "8px",
        p: {
            xxxl: "15px 20px",
            xxl: "12px 20px",
            xl: "10px 18px",
            xxs: "8px 15px"
        },
        mb: "10px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    SubmitButton: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        fontWeight: 600,
        bgcolor: "primary.main",
        color: "background.default",
        p: {
            xxxl: "18px 35px",
            xxl: "14px 30px",
            xxs: "12px 30px"
        },
        borderRadius: "5px",
        mt: "10px"
    },
    Image: {
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        objectFit: "cover"
    }
}