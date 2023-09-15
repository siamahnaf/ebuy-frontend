import { Theme } from "@mui/material/styles";

export default {
    Title: {
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            xxs: "18px"
        },
        pb: "10px",
        mb: "20px",
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.border_bottom}`,
        position: "relative",
        fontWeight: 500,
        "&:after": {
            content: '""',
            position: "absolute",
            width: "25%",
            bgcolor: "primary.main",
            height: "2px",
            left: "0",
            bottom: "0"
        }
    },
    Link: {
        color: "text.primary",
        textDecoration: "none",
        display: "block",
        p: "10px 10px 5px 10px",
        height: "100%",
        borderRadius: "5px",
        transition: "0.2s ease",
        cursor: "pointer",
        "&:hover": {
            bgcolor: "primary.grey_hover"
        }
    },
    Images: {
        width: "100%",
        height: {
            xxxl: "150px",
            xxl: "140px",
            xl: "138px",
            lg: "120px",
            xxs: "auto"
        },
        borderRadius: "5px"
    },
    ProductTitle: (theme: Theme) => ({
        fontSize: {
            xxx: "16px",
            xxl: "15px",
            xxs: "14px"
        },
        fontWeight: 500,
        mb: "5px",
        [theme.breakpoints.down("sm")]: {
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            overflow: "hidden"
        }
    }),
    Star: {
        span: {
            color: "primary.star",
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                xxs: "16px"
            }
        },
        "& .MuiRating-iconFilled": {
            color: "primary.star_fill"
        }
    },
    RatingPoint: {
        ml: "2px",
        color: "primary.main_secondary",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        }
    },
    OriginalPrice: {
        fontSize: {
            xxxl: "15px",
            xxl: "14px",
            xxs: "13px"
        },
        color: "primary.main_secondary",
        textDecoration: "line-through"
    }
}