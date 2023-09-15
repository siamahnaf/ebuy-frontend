import { Theme } from "@mui/material/styles";

export default {
    Embla: {
        overflow: "hidden"
    },
    EmblaContainer: {
        display: "flex"
    },
    EmblaSlide: {
        position: "relative",
        flex: "0 0 100%",
        a: {
            pt: {
                sm: "51.5625%",
                xxs: "54%"
            },
            display: "block",
            img: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }
        }
    },
    DotBtnContainer: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: {
            xxxl: "1%",
            xxl: "3%",
            md: "10%",
            lsm: "5%",
            xxs: "2%"
        },
        button: {
            bgcolor: "primary.dot_button",
            width: "10px",
            height: "10px",
            mx: "3px",
            borderRadius: "50%",
            boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
            transition: "0.3s ease-in-out",
            "&.is-selected": {
                bgcolor: "background.default",
                width: "30px",
                height: "10px",
                borderRadius: "8px"
            }
        }
    },
    ArrowLeft: {
        position: "absolute",
        top: "50%",
        left: "1%",
        transition: "0.2s ease",
        p: "8px",
        borderRadius: "50%",
        display: {
            md: "block",
            xxs: "none"
        },
        svg: {
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                xxs: "20px"
            },
            transition: "0.2s ease"
        },
        "&:hover": {
            left: "0.5%",
            svg: {
                fontSize: {
                    xxxl: "26px",
                    xxl: "25px",
                    xxs: "24px"
                },
            }
        }
    },
    ArrowRight: {
        position: "absolute",
        top: "50%",
        right: "1%",
        transition: "0.2s ease",
        p: "8px",
        borderRadius: "50%",
        display: {
            md: "block",
            xxs: "none"
        },
        svg: {
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                xxs: "20px"
            },
            transition: "0.2s ease"
        },
        "&:hover": {
            right: "0.5%",
            svg: {
                fontSize: {
                    xxxl: "26px",
                    xxl: "25px",
                    xxs: "24px"
                }
            }
        }
    }
}