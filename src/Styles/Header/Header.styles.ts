import { Theme } from "@mui/material/styles";

export default {
    Header: {
        py: {
            xxxl: "20px",
            xxl: "15px",
            xl: "10px",
            sm: "5px",
            xxs: "4px"
        },
        position: "fixed",
        zIndex: "9999",
        top: "0",
        width: "100%",
        transition: "box-shadow 0.2s ease",
        "&.sticky": {
            bgcolor: "background.default",
            boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`
        }
    }
}