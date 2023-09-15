import { Theme } from "@mui/material/styles";

export default {
    List: {
        position: "relative",
        "&:after": {
            content: '""',
            bgcolor: "primary.black_opacity",
            width: "1px",
            height: "100%",
            position: "absolute",
            left: "50%",
            top: "0"
        },
        li: {
            p: "10px 25px",
            my: "4px",
            borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
            "&:first-child": {
                borderTop: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`
            },
            "& p": {
                fontSize: {
                    xxxl: "16px",
                    xxl: "15px",
                    msm: "14px",
                    xxs: "13px"
                },
                color: "primary.main",
                flex: "0 0 50%"
            }
        }
    }
}