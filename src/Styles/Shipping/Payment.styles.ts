import { Theme } from "@mui/material/styles";

export default {
    Title: {
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            msm: "18px",
            xxs: "17px"
        },
        fontWeight: 600
    },
    PaymentCard: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        height: {
            xxxl: "110px",
            xxl: "90px",
            xl: "80px",
            xxs: "70px"
        },
        borderRadius: "10px",
        px: "15px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&.selected": {
            bgcolor: "primary.black_opacity"
        }
    },
    smallImages: {
        width: "25px",
        mr: "10px"
    },
    Text: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.gray_secondary"
    },
    CheckBoxText: {
        fontWeight: 500,
        color: "primary.main",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        userSelect: "none"
    }
}