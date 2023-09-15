import { Theme } from "@mui/material";

export default {
    FooterContainer: {
        bgcolor: "background.default",
        boxShadow: (theme: Theme) => `0 0 25px ${theme.palette.primary.box_shadow}`,
        mt: "4em",
        pb: {
            md: "1.5em",
            lsm: "4em",
            sm: "4em",
            xxs: "5em"
        }
    }
}