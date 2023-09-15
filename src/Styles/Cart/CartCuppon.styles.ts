import { Theme } from "@mui/material/styles";

export default {
    Buttons: {
        color: "background.default",
        a: {
            textDecoration: "none",
            color: "background.default",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "12px"
            },
            bgcolor: "primary.main",
            p: {
                xxxl: "15px 25px",
                xxl: "13px 22px",
                xl: "12px 20px",
                sm: "12px 18px",
                xxs: "8px 10px"
            },
            borderRadius: "4px",
            fontWeight: 500,
            svg: {
                fontSize: {
                    xxxl: "18px",
                    xxl: "17px",
                    msm: "16px",
                    xxs: "14px"
                },
                mr: "10px",
                mb: "-3px"
            }
        }

    },
    CupponContainer: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        p: {
            xxxl: "50px 35px",
            xxl: "40px 30px",
            xl: "30px 30px",
            xxs: "25px 30px"
        },
        borderRadius: "8px",
        mr: {
            lg: "2.5em",
            xxs: "0"
        },
        flexBasis: {
            lg: "52%",
            xxs: "100%"
        }
    },
    CalculateTextBold: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        fontWeight: 600,
        mb: "10px",
        color: "primary.main"
    },
    CalculateTextPlain: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.gray_secondary",
        mb: "1.5em",
        span: {
            color: "primary.main"
        }
    },
    InputBase: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        borderRadius: "5px",
        p: {
            xxxl: "8px 12px",
            xxl: "7px 12px",
            xl: "6px 12px",
            xxs: "5px 12px"
        },
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    UpdateCartButton: {
        flex: 1,
        textAlign: "right"
    },
    Select: {
        width: "100%",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        borderRadius: "5px",
        select: {
            p: {
                xxxl: "11px 12px",
                xxl: "10px 12px",
                xl: "9px 12px",
                xxs: "8px 12px"
            },
            borderRadius: "5px",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            height: "auto",
            "&:focus": {
                background: "transparent"
            }
        },
        "& .MuiSelect-select": {
            minHeight: "0em !important"
        },
        "&:before": {
            border: "none"
        },
        "&:after": {
            border: "none"
        },
        "&:hover": {
            "&:before": {
                border: "none !important"
            }
        }
    }
}