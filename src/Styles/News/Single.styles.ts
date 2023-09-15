import { Theme } from "@mui/material/styles";

export default {
    Images: {
        height: {
            xxxl: "560px",
            xxl: "490px",
            lsm: "400px",
            sm: "360px",
            xxs: "340px"
        },
        mb: "3em",
        img: {
            width: "100%",
            objectFit: "cover",
            height: "100%",
            objectPosition: "top",
            borderRadius: "10px",
        }
    },
    NewsTitle: {
        fontSize: {
            xxxl: "38px",
            xxl: "34px",
            md: "30px",
            smd: "25px",
            xxs: "20px"
        },
        fontWeight: 500,
        mb: "15px"
    },
    NewsDescription: {
        color: "primary.main",
        mt: "30px",
        mb: "20px",
        fontSize: {
            xxxl: "18px",
            xxl: "17px",
            msm: "16px",
            xxs: "15px"
        }
    },
    ViewsAndComment: {
        fontWeight: 300,
        mr: "2em",
        color: "primary.gray_secondary",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        svg: {
            mb: "-4px",
            mr: "3px",
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            }
        }
    },
    Title: {
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            msm: "18px",
            xxs: "17px"
        },
        fontWeight: 600,
        mb: "20px"
    },
    Textarea: {
        width: "100%",
        p: "10px 15px",
        borderRadius: "10px",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        mt: "20px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    SubmitButton: {
        bgcolor: "primary.main",
        color: "background.default",
        p: {
            xxxl: "15px 20px",
            xxl: "12px 20px",
            xxs: "10px 20px"
        },
        borderRadius: "5px",
        mt: "20px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        fontWeight: 500
    }
}