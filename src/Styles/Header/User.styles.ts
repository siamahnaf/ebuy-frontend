import { Theme } from "@mui/material/styles";

export default {
    OrText: {
        textAlign: "center",
        position: "relative",
        mb: "10px",
        "& p": {
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                xxs: "16px"
            },
            bgcolor: "background.default",
            width: "max-content",
            mx: "auto",
            px: "8px",
            position: "relative",
            zIndex: 9
        },
        "&:after": {
            content: '""',
            bgcolor: "primary.main",
            width: "100%",
            height: "1px",
            position: "absolute",
            left: "0",
            top: "12px"
        }
    },
    FacebookLogin: {
        bgcolor: "primary.facebook",
        width: "100%",
        color: "background.default",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        },
        fontWeight: 500,
        py: "10px",
        borderRadius: "4px",
        mb: "10px",
        svg: {
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                xxs: "20px"
            },
            mr: "6px",
            mb: "-2px"
        }
    },
    GoogleLogin: {
        width: "100%",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        },
        fontWeight: 500,
        py: "10px",
        borderRadius: "4px",
        svg: {
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                xxs: "18px"
            },
            mr: "6px"
        }
    },
    BottomText: {
        textAlign: "center",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        },
        mt: "10px",
        fontWeight: 500,
        button: {
            fontWeight: 600,
            cursor: "pointer",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                xxs: "14px"
            },
            textDecoration: "underline",
            mb: "4px"
        }
    },
    CloseBtn: {
        position: "absolute",
        right: "-10px",
        top: "-10px",
        bgcolor: "background.default",
        color: "primary.bagItem_count",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        textAlign: "center"
    }
}