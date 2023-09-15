import { Theme } from "@mui/material/styles";

export default {
    ReviewBox: {
        mb: "1.5em",
        p: "25px",
        borderRadius: "15px",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        flexWrap: {
            sm: "unset",
            xxs: "wrap"
        }
    },
    ImageBox: {
        textAlign: {
            sm: "center",
            xxs: "left"
        },
        mr: "12px",
        img: {
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "50%"
        },
        "& p": {
            color: "primary.main",
            fontWeight: 500,
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            }
        }
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
    Date: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        fontWeight: 500,
        color: "primary.main"
    },
    Comments: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.main"
    }
}