export default {
    PictureLabel: {
        position: "relative",
        width: "max-content",
        cursor: "pointer"
    },
    AddIcon: {
        position: "absolute",
        bottom: "0",
        right: "0",
        bgcolor: "primary.main",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: "background.default"
    },
    TitleText: {
        mt: "20px",
        mb: "10px",
        fontSize: {
            xxxl: "18px",
            xxl: "17px",
            msm: "16px",
            xxs: "15px"
        }
    },
    InputField: {
        width: "100%",
        p: {
            xxxl: "15px 25px",
            xxl: "10px 20px",
            xl: "8px 15px",
            xxs: "5px 10px"
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
    ShowOrHidePassword: {
        position: "absolute",
        right: {
            xxxl: "15px",
            xxs: "10px"
        },
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        "& p": {
            textTransform: "uppercase",
            fontSize: {
                xxxl: "13px",
                xxl: "12px",
                msm: "11px",
                xxs: "10px"
            },
            userSelect: "none"
        }
    },
    Select: {
        width: "100%",
        borderRadius: "5px",
        bgcolor: "primary.gray_primary",
        mb: "15px",
        select: {
            p: "8px 10px",
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
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        color: "primary.gray_secondary",
        my: "15px",
        svg: {
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                msm: "20px",
                xxs: "19px"
            },
            mb: "-4px",
            ml: "12px",
            mr: "5px"
        }
    }
}