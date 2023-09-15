import { Theme } from "@mui/material/styles";

export default {
    Title: {
        fontSize: {
            xxxl: "30px",
            xxl: "29px",
            lg: "28px",
            md: "22px",
            lsm: "25px",
            sm: "22px",
            xxs: "18px"
        },
        fontWeight: 600,
        lineHeight: "1.5",
    },
    Star: {
        span: {
            color: "primary.star",
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "15px"
            }
        },
        "& .MuiRating-iconFilled": {
            color: "primary.star_fill"
        }
    },
    Reviews: {
        ml: "5px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    MainPrice: {
        fontSize: {
            xxxl: "47px",
            xxl: "46px",
            lg: "45px",
            md: "35px",
            xxs: "44px"
        },
        fontWeight: 700,
        mr: "5px"
    },
    DiscountPrice: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            lg: "14px",
            md: "12px",
            xxs: "10px"
        },
        fontWeight: 600,
        color: "primary.star_fill"
    },
    OriginalPrice: {
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            lg: "18px",
            md: "16px",
            xxs: "17px"
        },
        letterSpacing: "1px",
        color: "primary.gray_secondary",
        textDecoration: "line-through",
        fontWeight: 300
    },
    ShortDescription: {
        my: "15px",
        color: "primary.gray_secondary",
        WebkitLineClamp: "4",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    SizeAndColorstitle: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        color: "primary.gray_secondary",
        mr: "35px"
    },
    SizeRadioButton: {
        position: "relative",
        "& span:first-child": {
            border: "1px solid transparent",
            width: "100%",
            height: "100%",
            p: "15px 20px",
            borderRadius: "3px",
            input: {
                display: "none"
            },
            span: {
                display: "none"
            },
            "&.Mui-checked": {
                boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
                borderColor: "primary.main"
            }
        },
        "& span:last-child": {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            }
        }
    },
    ColorRadioButton: {
        mr: "25px",
        "& span:first-child": {
            width: "100%",
            borderRadius: "50%",
            p: "8px",
            position: "relative",
            height: "0",
            mb: {
                xs: "0px",
                xxs: "10px"
            },
            "&::after": {
                content: '""',
                position: "absolute",
                borderRadius: "50%",
                left: "-3px",
                top: "-3px",
                zIndex: -1,
                right: "-3px",
                bottom: "-3px",
                border: "1px solid transparent"
            },
            input: {
                display: "none"
            },
            span: {
                display: "none"
            },
            "&.Mui-checked": {
                "&::after": {
                    borderColor: "primary.main"
                }
            }
        },
        "& span:last-child": {
            display: "none"
        }
    },
    InputField: {
        p: {
            xxxl: "15px 30px",
            xxl: "12px 28px",
            xl: "10px 27px",
            lg: "8px 25px",
            md: "5px 10px",
            msm: "5px 25px",
            xxs: "5px 15px"
        },
        borderRadius: "4px",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        fontWeight: "700"
    },
    CounterButton: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        button: {
            display: "block",
            my: "5px",
            p: "1px 5px",
            borderRadius: "2px",
            svg: {
                fontSize: {
                    xxxl: "14px",
                    xxl: "13px",
                    msm: "12px",
                    xxs: "11px"
                }
            }
        }
    },
    SubmitButton: {
        bgcolor: "primary.main",
        color: "background.default",
        px: "20px",
        fontSize: {
            xxxl: "14px",
            xxl: "13px",
            msm: "12px",
            xxs: "11px"
        },
        ml: "10px",
        borderRadius: "3px",
        textTransform: "uppercase",
        fontWeight: 600,
        svg: {
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            },
            mr: "10px",
            mb: "3px"
        }
    },
    LoveAndDownBtn: {
        ml: "10px",
        px: {
            xxxl: "20px",
            xxl: "17px",
            xl: "16px",
            xxs: "15px"
        },
        borderRadius: "4px",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.gray_tartiary}`,
        svg: {
            color: "primary.gray_tartiary",
            fontSize: {
                xxxl: "24px",
                xxl: "23px",
                msm: "22px",
                xxs: "21px"
            }
        }
    }
}