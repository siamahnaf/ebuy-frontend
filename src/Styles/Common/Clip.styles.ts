import { Theme } from "@mui/material/styles";

export default {
    Container: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
        height: {
            xxxl: "140px",
            xxl: "115px",
            xl: "100px",
            lg: "80px",
            md: "70px",
            smd: "100px",
            lsm: "90px",
            msm: "80px",
            sm: "75px",
            xxs: "95px"
        },
        px: "10px",
        borderRadius: "7px",
        alignItems: "center",
        justifyContent: "center"
    },
    Image: {
        mr: {
            xxxl: "30px",
            xxl: "25px",
            xl: "20px",
            lg: "15px",
            md: "10px",
            smd: "25px",
            msm: "20px",
            sm: "18px",
            xxs: "25px"
        },
        img: {
            width: {
                xxxl: "70px",
                xxl: "60px",
                xl: "55px",
                lg: "50px",
                md: "40px",
                smd: "50px",
                msm: "40px",
                sm: "35px",
                xxs: "45px"
            }
        }
    },
    Title: {
        fontWeight: 500,
        fontSize: {
            xxxl: "18px",
            xxl: "16px",
            xl: "15px",
            lg: "14px",
            md: "12px",
            msm: "14px",
            sm: "13px",
            xxs: "15px"
        }
    },
    Description: {
        fontSize: {
            xxxl: "18px",
            xxl: "16px",
            xl: "15px",
            lg: "14px",
            md: "12px",
            msm: "14px",
            sm: "13px",
            xxs: "14px"
        }
    }
}