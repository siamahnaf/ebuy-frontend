import { Theme } from "@mui/material/styles";

export default {
    Container: (theme: Theme) => ({
        textAlign: "right",
        [theme.breakpoints.down("md")]: {
            position: "fixed",
            bgcolor: "background.default",
            bottom: 0,
            left: 0,
            py: "6px",
            width: "100%",
            textAlign: "center",
            boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`
        }
    }),
    List: (theme: Theme) => ({
        justifyContent: {
            md: "right",
            xxs: "center"
        },
        li: {
            my: "2px",
            width: "unset",
            ml: "8px",
            button: {
                borderRadius: "4px",
                position: "relative",
                svg: {
                    fontSize: {
                        xxxl: "30px",
                        xxl: "29px",
                        md: "28px",
                        xxs: "32px"
                    },
                    p: "6px",
                    borderRadius: "4px",
                    color: "primary.main"
                },
                [theme.breakpoints.down("md")]: {
                    width: "100%"
                }
            },
            [theme.breakpoints.down("md")]: {
                width: "25%",
                m: "3px 2px",
                justifyContent: "center"
            }
        }
    }),
    BagItemCount: {
        position: "absolute",
        bgcolor: "primary.bagItem_count",
        width: "15px",
        height: "15px",
        fontSize: "10px",
        borderRadius: "50%",
        color: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "0",
        top: "5px"
    }
}