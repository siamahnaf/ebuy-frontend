import { Theme } from "@mui/material/styles";

export default {
    DetailContainer: {
        width: '100%',
        typography: 'body1',
        border: (theme: Theme) => `1px solid ${theme.palette.primary.gray_primary}`,
        mt: "2.5em",
        p: {
            msm: "1.8em",
            xxs: "0.5em"
        },
        borderRadius: "12px",
    },
    TabButton: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        px: {
            msm: "30px",
            sm: "15px",
            xxs: "10px"
        },
        mr: "10px",
        borderRadius: "8px",
        textTransform: "capitalize",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        m: "10px",
        fontWeight: 500,
        color: "primary.gray_secondary",
        transition: "0.2s ease",
        "&&.Mui-selected": {
            color: "primary.main",
            borderColor: "transparent",
            background: "white",
            boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        }
    }
}