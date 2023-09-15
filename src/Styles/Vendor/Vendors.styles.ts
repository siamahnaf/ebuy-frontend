import { Theme } from "@mui/material/styles";

export default {
    CardContainer: {
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        borderRadius: "10px",
        p: "25px",
        alignItems: "center",
        position: "relative",
        transition: "0.4s cubic-bezier(0.545, 0, 0.05, 1)",
        "&:hover": {
            boxShadow: (theme: Theme) => `-8px 8px 5px ${theme.palette.primary.box_shadow2}`
        }
    },
    Title: {
        fontWeight: 600,
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            md: "18px",
            lsm: "16px",
            xxs: "14px"
        },
        mt: "5px",
        mb: "5px",
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
        ml: "5px"
    },
    FollowButton: {
        width: "100%",
        bgcolor: "primary.gray_primary",
        py: "12px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.gray_secondary",
        fontWeight: 700,
        borderRadius: "5px",
        transition: "0.4s cubic-bezier(0.545, 0, 0.05, 1)",
        "&:hover": {
            bgcolor: "text.primary",
            color: "background.default"
        }
    },
    ViewButton: {
        width: "100%",
        borderRadius: "5px",
        a: {
            width: "100%",
            display: "block",
            py: "12px",
            bgcolor: "primary.gray_primary",
            textDecoration: "none",
            color: "primary.gray_secondary",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            fontWeight: 700,
            borderRadius: "5px",
            transition: "0.4s cubic-bezier(0.545, 0, 0.05, 1)",
            svg: {
                fontSize: {
                    xxxl: "20px",
                    xxl: "19px",
                    msm: "18px",
                    xxs: "17px"
                },
                ml: "10px",
                mb: "-4px"
            },
            "&:hover": {
                bgcolor: "text.primary",
                color: "background.default"
            }
        }
    },
    LoadMore: {
        textAlign: "center",
        mt: "4em",
        button: {
            bgcolor: "text.primary",
            color: "background.default",
            p: {
                xxxl: "15px 30px",
                xl: "12px 25px",
                xxs: "10px 20px"
            },
            borderRadius: "4px",
            fontSize: {
                xxxl: "15px",
                xxl: "14px",
                msm: "13px",
                xxs: "12px"
            },
            fontWeight: 600,
            textTransform: "uppercase"
        }
    }
}