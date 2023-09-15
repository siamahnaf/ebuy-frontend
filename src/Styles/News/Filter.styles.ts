export default {
    FilterContainer: {
        width: "90%",
        m: "0 auto",
        my: "3em",

        alignItems: "center",
        flexWrap: {
            sm: "unset",
            xxs: "wrap"
        }
    },
    FashionTextContainer: {
        textAlign: {
            sm: "left",
            xxs: "center"
        },
        flexBasis: {
            sm: "unset",
            xxs: "100%"
        }
    },
    NewsInfoText: {
        fontSize: {
            xxxl: "18px",
            xxl: "17px",
            msm: "16px",
            xxs: "15px"
        },
        fontWeight: 600,
        svg: {
            mb: "-4px",
            mr: "1px",
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                msm: "20px",
                xxs: "19px"
            }
        }
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
            p: "8px 12px",
            borderRadius: "5px",
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            },
            fontWeight: 300,
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