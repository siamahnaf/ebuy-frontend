import { Theme } from "@mui/material/styles";

export default {
    Container: {
        textAlign: "right",
        display: {
            md: "none",
            xxs: "block"
        }
    },
    Drawer: {
        zIndex: 9999999999,
        position: "relative",
        "& .MuiPaper-root": {
            width: {
                smd: "450px",
                lsm: "400px",
                msm: "320px",
                sm: "300px",
                xs: "260px",
                xxs: "230px"
            }
        }
    },
    Header: {
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        width: "100%",
        py: "15px",
        px: "25px",
        position: "relative"
    },
    CloseIcon: {
        position: "absolute",
        right: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        p: "6px",
        borderRadius: "5px",
        svg: {
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                xxs: "15px"
            }
        }
    },
    NavList: {
        px: "25px",
        py: "25px",
        li: {
            my: "5px",
            width: "unset",
            button: {
                borderRadius: "4px",
                width: "100%",
                py: "5px",
                justifyContent: "left",
                a: {
                    textDecoration: "none",
                    color: "text.primary",
                    fontSize: {
                        xxxl: "16px",
                        xxl: "15px",
                        xxs: "14px"
                    },
                    p: "5px 10px",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                }
            }
        }
    },
    SocialList: {
        position: "absolute",
        bottom: 0,
        px: {
            lsm: "80px",
            msm: "50px",
            xxs: "0px"
        },
        left: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        py: "20px",
        borderTop: (theme: Theme) => `1px solid ${theme.palette.primary.box_shadow}`,
        li: {
            justifyContent: "center",
            a: {
                textDecoration: "none",
                color: "primary.gray_secondary",
                svg: {
                    display: "block",
                    fontSize: {
                        xxxl: "22px",
                        xxl: "21px",
                        xxs: "20px"
                    }
                }
            }
        }
    }
}