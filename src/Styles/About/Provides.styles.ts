import { Theme } from "@mui/material/styles";

export default {
    Container: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        textAlign: "center",
        p: {
            xxxl: "6em 3em",
            xxl: "4.5em 2.8em",
            xl: "3em 2em",
            md: "1.5em 1em",
            lsm: "2.5em 1em",
            xxs: "1.5em 1em"
        },
        borderRadius: "10px"
    },
    Titlte: {
        fontWeight: 600,
        fontSize: {
            xxxl: "18px",
            xxl: "17px",
            msm: "16px",
            xxs: "15px"
        },
        mt: "10px"
    },
    Description: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        mt: "10px"
    }
}