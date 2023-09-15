//Background Image
import Background from "Assets/category.png";

export default {
    Container: {
        background: `url("${Background}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        alignItems: "center",
        p: {
            xxxl: "8em 2.5em",
            xxl: "6em 2.5em",
            xl: "5em 2.5em",
            md: "4em 2.5em",
            lsm: "3.5em 2.5em",
            msm: "3em 2.5em",
            sm: "2em 1.5em",
            xxs: "1.8em 1.2em"
        },
        borderRadius: "10px",
        mb: "2em"
    },
    CategoryName: {
        fontSize: {
            xxxl: "24px",
            xxl: "23px",
            lsm: "22px",
            msm: "20px",
            xxs: "18px"
        },
        fontWeight: 600,
        mb: "10px"
    },
    HomeIcon: {
        cursor: "pointer",
        textDecoration: "none",
        color: "primary.main",
        svg: {
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                lsm: "15px",
                msm: "14px",
                xxs: "13px"
            },
            mb: "-2px"
        },
        span: {
            fontWeight: 700,
            ml: "8px",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            }
        }
    },
    Link: {
        textDecoration: "none",
        color: "primary.main",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            lsm: "15px",
            msm: "14px",
            xxs: "13px"
        },
        cursor: "pointer",
        "& p": {
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            }
        }
    },
    Separator: {
        fontSize: {
            xxxl: "10px",
            xxl: "9px",
            msm: "8px",
            xxs: "6px"
        },
        mb: "-4px"
    },
    Typography: {
        color: "primary.main",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    ChipContainer: {
        flex: 1,
        justifyContent: "right",
        flexWrap: "wrap"
    }
}