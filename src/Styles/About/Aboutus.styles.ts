export default {
    Title: {
        fontWeight: 500,
        fontSize: {
            xxxl: "22px",
            xxl: "21px",
            msm: "20px",
            xxs: "19px"
        }
    },
    Description: {
        mt: "10px",
        mb: "25px",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    CarouselImages: {
        width: "100%",
        height: "90%",
        objectFit: "cover",
        objectPosition: "top"
    },
    Arrows: {
        display: {
            msm: "block",
            xxs: "none"
        },
        button: {
            position: "absolute",
            top: "45%",
            transform: "translateY(-50%)",
            bgcolor: "primary.main",
            width: "32px",
            height: "32px",
            display: "flex",
            borderRadius: "50%",
            color: "background.default",
            justifyContent: "center",
            alignItems: "center",
            svg: {
                fontSize: {
                    xxxl: "17px",
                    xxl: "16px",
                    msm: "15px",
                    xxs: "14px"
                }
            },
            "&.arrow-left": {
                left: "-15px"
            },
            "&.arrow-right": {
                right: "-15px"
            }
        }
    },
    LeftImage: {
        width: "100%",
        height: "97.5%",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "12px"
    }
}