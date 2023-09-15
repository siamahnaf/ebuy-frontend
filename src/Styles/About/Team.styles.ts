import { Theme } from "@mui/material/styles";

export default {
    HeaderTitle: {
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            msm: "18px",
            xxs: "17px"
        },
        fontWeight: 500,
        color: "primary.gray_tertiary"
    },
    Title: {
        fontSize: {
            xxxl: "47px",
            xxl: "46px",
            msm: "45px",
            sm: "35px",
            xs: "30px",
            xxs: "25px"
        },
        fontWeight: 700,
        mb: "20px",
        mt: "10px"
    },
    Description: {
        color: "primary.gray_secondary",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    Embla: {
        overflow: "hidden",
        pb: "5em"
    },
    EmblaContainer: {
        display: "flex",
    },
    EmblaSlide: {
        position: "relative",
        flex: {
            msm: "0 0 50%",
            xxs: "0 0 100%"
        },
        mx: "10px"
    },
    Images: {
        width: "100%",
        borderRadius: "10px"
    },
    TeamContent: {
        position: "absolute",
        bgcolor: "background.default",
        width: {
            sm: "82%",
            xxs: "90%"
        },
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "-55px",
        p: "30px 40px",
        borderRadius: "15px",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        textAlign: "center"
    },
    Name: {
        fontWeight: 500,
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            msm: "18px",
            xxs: "17px"
        }
    },
    Post: {
        fontWeight: 300,
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    List: {
        marginTop: "8px",
        li: {
            display: "inline",
            a: {
                color: "primary.main",
                button: {
                    mx: "2px",
                    p: "5px",
                    borderRadius: "3px",
                    svg: {
                        fontSize: {
                            xxxl: "18px",
                            xxl: "17px",
                            msm: "16px",
                            xxs: "15px"
                        }
                    }
                }
            }
        }
    },
    ArrowLeft: {
        position: "absolute",
        top: "50%",
        left: "-16px",
        transform: "translateY(-60%)",
        bgcolor: "primary.main",
        color: "background.default",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: {
            msm: "flex",
            xxs: "none"
        },
        svg: {
            fontSize: "18px"
        }
    },
    ArrowRight: {
        position: "absolute",
        top: "50%",
        right: "-16px",
        transform: "translateY(-60%)",
        bgcolor: "primary.main",
        color: "background.default",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: {
            msm: "flex",
            xxs: "none"
        },
        svg: {
            fontSize: "18px"
        }
    }
}