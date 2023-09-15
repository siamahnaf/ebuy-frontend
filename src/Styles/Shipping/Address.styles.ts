export default {
    Title: {
        fontSize: {
            xxxl: "22px",
            xxl: "20px",
            msm: "18px",
            xxs: "17px"
        },
        fontWeight: 600
    },
    InputField: {
        width: "100%",
        p: {
            xxxl: "10px 15px",
            xxl: "9px 15px",
            xl: "7px 15px",
            xxs: "6px 15px"
        },
        borderRadius: "5px",
        bgcolor: "primary.gray_primary",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    Select: {
        width: "100%",
        borderRadius: "5px",
        bgcolor: "primary.gray_primary",
        mb: "15px",
        select: {
            p: {
                xxxl: "13px 15px",
                xxl: "12px 15px",
                xl: "10px 15px",
                xxs: "9px 15px"
            },
            borderRadius: "5px",
            height: "auto",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            "&:focus": {
                background: "transparent"
            }
        },
        "& .MuiSelect-select": {
            minHeight: "0em !important"
        },
        "&:before": {
            border: "none",
        },
        "&:after": {
            border: "none",
        },
        "&:hover": {
            "&:before": {
                border: "none !important",
            },
        }
    },
    AdditionalInfo: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.gray_secondary",
        my: "15px",
        fontWeight: 600,
        svg: {
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                msm: "20px",
                xxs: "19px"
            },
            mb: "-5px",
            ml: "12px",
            mr: "5px"
        }
    },
    RadioButtonHeading: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        fontWeight: 600,
        color: "primary.main",
        mb: "3px"
    },
    RadioButtonText: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.main",
    }
}