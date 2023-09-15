import { Theme } from "@mui/material/styles";

export default {
    VendorList: {
        textAlign: "center",
        mb: "30px",
        h4: {
            fontWeight: 600,
            fontSize: {
                xxxl: "32px",
                xxl: "31px",
                msm: "30px",
                xxs: "29px"
            }
        }
    },
    SearchBar: {
        background: "background.default",
        mt: "20px",
        width: {
            md: "40%",
            smd: "60%",
            lsm: "70%",
            xxs: "90%"
        },
        p: {
            xxxl: "10px 20px",
            xxl: "8px 18px",
            xl: "7px 17px",
            xxs: "6px 15px"
        },
        borderRadius: "8px",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    VendorInfoText: {
        flexBasis: {
            msm: "unset",
            xxs: "100%"
        },
        textAlign: {
            msm: "left",
            xxs: "center"
        },
        mb: {
            msm: "0px",
            xxs: "10px"
        },
        "& p": {
            fontWeight: "background.default",
            color: "primary.gray_secondary",
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            },
            span: {
                fontWeight: 500,
                color: "primary.main",
                fontSize: {
                    xxxl: "17px",
                    xxl: "16px",
                    msm: "15px",
                    xxs: "14px"
                }
            }
        }
    },
    Content: {
        width: {
            md: "65%",
            smd: "75%",
            lsm: "95%",
            xxs: "100%"
        },
        m: "0 auto",
        my: "3em",
        flexWrap: {
            msm: "unset",
            xxs: "wrap"
        }
    },
    SelectContainer: {
        justifyContent: {
            msm: "right",
            xxs: "center"
        },
        flex: 1,
        flexBasis: {
            msm: "unset",
            xxs: "100%"
        },
    },
    SelectText: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    Select: {
        width: "100%",
        borderRadius: "5px",
        select: {
            p: "8px 12px !important",
            borderRadius: "5px",
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            },
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
        },
        svg: {
            display: "none"
        }
    }
}