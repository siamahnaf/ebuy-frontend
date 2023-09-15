import { Theme } from "@mui/material/styles";

export default {
    Link: {
        textDecoration: "none",
        color: "primary.main",
        bgcolor: "background.defualt",
        display: "block",
        cursor: "pointer",
        overflow: "hidden",
        boxShadow: (theme: Theme) => `-10px 10px 25px ${theme.palette.primary.product_card_shadow}`,
        borderRadius: "8px",
        position: "relative",
        transition: "0.4s cubic-bezier(0.545, 0, 0.05, 1)",
        "&:hover": {
            boxShadow: (theme: Theme) => `-10px 10px 25px ${theme.palette.primary.product_card_shadow_hover}`,
            img: {
                transform: "scale(1.1)"
            }
        }
    },
    Content: {
        p: {
            xxxl: "20px 25px",
            xxl: "18px 23px",
            xl: "15px 20px",
            lg: "10px 15px",
            smd: "8px 12px",
            lsm: "8px 10px",
            msm: "10px 15px",
            xs: "8px 10px",
            xxs: "5px 8px"
        }
    },
    Images: {
        transition: "0.3s ease",
        height: {
            xxxl: "580px",
            xxl: "450px",
            xl: "350px",
            xxs: "auto"
        },
        width: "100%",
        objectFit: "cover",
        objectPosition: "top center",
        borderRadius: "5px"
    },
    Titlte: {
        fontSize: {
            xxl: "20px",
            xl: "18px",
            lsm: "17px",
            msm: "18px",
            sm: "16px",
            xs: "15px",
            xxs: "14px"
        },
        fontWeight: "bold",
        mb: "10px"
    },
    Description: {
        WebkitLineClamp: "1",
        WebkitBoxOrient: "vertical",
        display: "-webkit-box",
        overflow: "hidden",
        mb: "12px",
        fontWeight: "light",
        fontSize: {
            xxl: "16px",
            xl: "15px",
            lsm: "13px",
            msm: "14px",
            xs: "13px",
            xxs: "12px"
        },
        width: "75%"
    },
    Star: {
        mt: "4px",
        span: {
            color: "primary.star",
            fontSize: {
                xxxl: "22px",
                xxl: "20px",
                xl: "19px",
                lsm: "18px",
                msm: "20px",
                sm: "18px",
                xs: "14px",
                xxs: "12px"
            }
        },
        "& .MuiRating-iconFilled": {
            color: "primary.star_fill"
        }
    },
    Buttons: {
        textAlign: "right",
        flex: 1,
        button: {
            ml: {
                xs: "6px",
                xxs: "3px"
            },
            p: {
                xxl: "10px",
                xl: "8px",
                lsm: "6px",
                msm: "8px",
                sm: "6px",
                xxs: "4px",
            },
            bgcolor: "primary.main",
            color: "background.default",
            borderRadius: "4px",
            svg: {
                fontSize: {
                    xxxl: "18px",
                    xl: "17px",
                    lsm: "16px",
                    msm: "18px",
                    sm: "15px",
                    xs: "13px",
                    xxs: "12px"
                }
            }
        }
    },
    PriceBox: {
        position: "absolute",
        right: "0",
        bgcolor: "primary.main",
        color: "background.default",
        p: "3px 13px",
        bottom: {
            xxxl: "25%",
            xxl: "30%",
            xl: "35%",
            md: "38%",
            lsm: "35%",
            sm: "32%",
            xs: "35%",
            xxs: "40%"
        },
        borderRadius: "4px 0 0 4px",
        h6: {
            fontWeight: 500,
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                sm: "16px",
                xxs: "15px"
            }
        }
    }
}