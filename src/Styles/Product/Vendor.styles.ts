export default {
    Name: {
        fontSize: {
            xxxl: "22px",
            xxl: "21px",
            msm: "20px",
            xxs: "19px"
        },
        fontWeight: 700,
        mb: "5px"
    },
    Star: {
        span: {
            color: "primary.star",
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            }
        },
        "& .MuiRating-iconFilled": {
            color: "primary.star_fill"
        }
    },
    Reviews: {
        mt: "-3px",
        ml: "5px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    SellerContactInfo: {
        alignItems: "center",
        my: "10px",
        svg: {
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            },
            mr: "10px",
            color: "primary.main"
        },
        "& p": {
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            color: "primary.main"
        }
    },
    Button: {
        width: "100%",
        bgcolor: "primary.gray_primary",
        py: {
            xxxl: "18px",
            xxl: "16px",
            xl: "14px",
            xxs: "12px"
        },
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.gray_secondary",
        fontWeight: 700,
        borderRadius: "5px",
        svg: {
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            },
            ml: "10px",
            mb: "-1px"
        },
        transition: "0.4s cubic-bezier(0.545, 0, 0.05, 1)",
        "&:hover": {
            bgcolor: "text.primary",
            color: "background.default"
        }
    },
    SuccessBox: {
        flexBasis: {
            sm: "unset",
            xxs: "100%"
        },
        mr: {
            msm: "5em",
            xxs: "1.5em"
        },
        h3: {
            color: "primary.main",
            fontSize: {
                xxxl: "37px",
                xxl: "36px",
                msm: "35px",
                xxs: "34px"
            },
            fontWeight: 400,
            mt: "10px"
        },
        "& p": {
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            },
            color: "primary.main"
        }
    },
    Details: {
        mt: "20px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.main"
    }
}