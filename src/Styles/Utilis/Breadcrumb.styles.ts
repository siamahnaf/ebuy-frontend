import { Theme } from "@mui/material/styles";

export default {
    Container: {
        py: {
            xxxl: "20px",
            xxl: "18px",
            lg: "12px",
            md: "10px",
            msm: "8px",
            xxs: "7px"
        },
        px: {
            msm: "4%",
            xxs: "3%"
        },
        my: "20px",
        borderTop: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`
    },
    Link: {
        textDecoration: "none",
        color: "text.primary",
        "& p": {
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                xxs: "14px"
            }
        },
        cursor: "pointer"
    },
    HomeIcon: {
        textDecoration: "none",
        color: "text.primary",
        cursor: "pointer",
        svg: {
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                xxs: "16px"
            },
            marginBottom: "-2px"
        },
        span: {
            fontWeight: 700,
            marginLeft: "8px",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                xxs: "14px"
            },
        }
    },
    Separator: {
        fontSize: {
            xxxl: "10px",
            xxl: "9px",
            xxs: "8px"
        },
        mb: "-4px"
    },
    Typography: {
        color: "text.primary",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        }
    }
}