import { Theme } from "@mui/material/styles";

export default {
    ItemsNumber: {
        alignItems: "center",
        color: "primary.main",
        h6: {
            fontSize: {
                xxxl: "14px",
                xxl: "16px",
                msm: "14px",
                xxs: "13px"
            },
            fontWeight: 600
        },
        "& p": {
            fontSize: {
                xxxl: "18px",
                xxl: "16px",
                msm: "14px",
                xxs: "13px"
            },
            ml: "5px"
        }
    },
    FilterContainer: {
        position: "relative",
        flexBasis: "85%"
    },
    SellerContainer: {
        flexBasis: "15%",
        textAlign: "right",
        position: "relative"
    },
    Buttons: {
        fontSize: {
            xxxl: "18px",
            xxl: "16px",
            msm: "14px",
            xxs: "13px"
        },
        p: "6px 10px",
        borderRadius: "3px",
        textTransform: "uppercase",
        svg: {
            fontSize: {
                xxxl: "15px",
                xxl: "14px",
                msm: "13px",
                xxs: "13px"
            },
            mr: "8px",
            mb: "-1px"
        }
    },
    FilterWidget: {
        bgcolor: "primary.searchBgWhite",
        position: "absolute",
        zIndex: 9,
        width: {
            md: "100%",
            smd: "125%",
            msm: "125%",
            sm: "140%",
            xs: "160%",
            xxs: "185%"
        },
        left: "0",
        p: "12px",
        borderRadius: "10px",
        top: "110%",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
    },
    SellerWidget: {
        position: "absolute",
        bgcolor: "background.default",
        right: 0,
        zIndex: 9,
        top: "110%",
        width: {
            lg: "90%",
            smd: "120%",
            msm: "125%",
            sm: "140%",
            xs: "160%",
            xxs: "170%"
        },
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        borderRadius: "10px"
    }
}