import { Theme } from "@mui/material/styles";

export default {
    Title: {
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            msm: "18px",
            xxs: "17px"
        },
        fontWeight: 600,
        mb: "20px"
    },
    Textarea: {
        width: "100%",
        p: "10px 15px",
        borderRadius: "10px",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        mt: "20px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    SubmitButton: {
        bgcolor: "primary.main",
        color: "background.default",
        p: {
            xxxl: "15px 40px",
            xxl: "14px 40px",
            xl: "13px 40px",
            xxs: "12px 40px"
        },
        borderRadius: "5px",
        mt: "20px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        fontWeight: 500
    }
}