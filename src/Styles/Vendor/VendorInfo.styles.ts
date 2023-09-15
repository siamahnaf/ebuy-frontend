import { Theme } from "@mui/material/styles";

export default {
    Image: {
        width: "100%",
        height: "200px",
        objectFit: "cever",
        borderRadius: "5px"
    },
    Container: {
        bgcolor: "background.default",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        px: {
            xxxl: "2em",
            xxl: "1.8em",
            xl: "1.6em",
            xs: "1.5em",
            xxs: "1em"
        },
        py: {
            xxxl: "3em",
            xxl: "2.5em",
            xl: "2em",
            xs: "1.5em",
            xxs: "1em"
        },
        borderRadius: "8px",
        mb: "3em",
        mt: "-2em",
        position: "relative",
        zIndex: 99
    },
    Title: {
        fontWeight: 600,
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            msm: "18px",
            xxs: "17px"
        },
        my: "5px"
    },
    Star: {
        mt: "2px",
        mr: "3px",
        mb: "10px",
        span: {
            color: "primary.star",
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            }
        },
        "& .MuiRating-iconFilled": {
            color: "primary.star_fill"
        }
    },
    Points: {
        color: "primary.gray_secondary",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        ml: "2px"
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
    SellerContactInfo: {
        alignItems: "center",
        my: "10px",
        svg: {
            fontSize: {
                xxxl: "18px",
                xxl: "19px",
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
    SuccessBox: {
        mr: {
            lg: "5em",
            md: "2.5em",
            xxs: "2em"
        },
        flexBasis: {
            xs: "unset",
            xxs: "100%"
        },
        h3: {
            color: "primary.main",
            fontSize: {
                xxxl: "32px",
                xxl: "31px",
                msm: "30px",
                xxs: "29px"
            },
            fontWeight: 500,
            mt: "10px"
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
    }
}