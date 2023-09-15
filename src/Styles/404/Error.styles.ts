export default {
    Container: {
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
    },
    Wrapper: {
        position: "relative",
        height: "100%",
        width: "100%",
    },
    Content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
    },
    Image: {
        width: {
            xxxl: "600px",
            xxl: "550px",
            xl: "500px",
            md: "440px",
            lsm: "420px",
            sm: "350px",
            xs: "280px",
            xxs: "250px"
        }
    },
    Title: {
        fontWeight: 700,
        fontSize: {
            xxxl: "25px",
            xxl: "24px",
            msm: "22px",
            xxs: "20px"
        }
    },
    Description: {
        width: {
            md: "70%",
            smd: "80%",
            msm: "90%",
            xxs: "100%",
        },
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        m: "15px auto"
    },
    Button: {
        color: "background.default",
        a: {
            textDecoration: "none",
            color: "background.default",
            bgcolor: "text.primary",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            p: {
                xxxl: "15px 30px",
                xxl: "12px 25px",
                xxs: "8px 20px"
            },
            borderRadius: "4px"
        }
    }
}