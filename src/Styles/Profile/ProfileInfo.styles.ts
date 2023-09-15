import { Theme } from "@mui/material/styles";

export default {
    Sticky: {
        position: {
            md: "sticky",
            xxs: "unset"
        },
        top: "50px",
        height: "max-content"
    },
    PageTitlte: {
        fontSize: {
            xxxl: "22px",
            xxl: "21px",
            msm: "20px",
            xxs: "19px"
        },
        textTransform: "uppercase",
        fontWeight: 600,
        mb: "1em",
        mt: "15px"
    },
    TabButton: {
        p: {
            xxxl: "20px 15px",
            xxl: "18px 15px",
            xl: "12px 15px",
            xxs: "15px"
        },
        m: "0",
        minHeight: "0",
        justifyContent: "left",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        textTransform: "capitalize",
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        color: "primary.gray_secondary",
        svg: {
            ml: "auto !important"
        },
        "&.Mui-selected": {
            bgcolor: "primary.gray_primary"
        }
    },
    LogoutButton: {
        mt: "10px",
        p: "10px 15px",
        justifyContent: "left",
        display: {
            md: "block",
            xxs: "none"
        },
        h6: {
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            },
            fontWeight: 600,
            color: "primary.delete_color"
        }
    }
}