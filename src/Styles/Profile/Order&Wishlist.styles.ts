import { Theme } from "@mui/material/styles";

export default {
    TabTitle: {
        ml: "-24px",
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        pl: "24px",
        pb: "5px",
        h6: {
            fontWeight: 600,
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            }
        }
    },
    ButtonContainer: {
        textAlign: "right"
    },
    Button: {
        color: "primary.delete_color",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        p: "6px 10px",
        borderRadius: "4px",
        svg: {
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            },
            mr: "5px",
        },
    },
    CardContainer: {
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        py: "20px",
        ml: "-24px",
        pl: "24px"
    },
    RemoveItem: {
        p: "8px",
        borderRadius: "50%",
        svg: {
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            },
            color: "primary.delete_color"
        }
    },
    Content: {
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none"
    },
    Images: {
        width: "100%",
        borderRadius: "3px"
    },
    ProductInfo: {
        h6: {
            fontWeight: 700,
            mb: "2px",
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            }
        },
        "& p": {
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            mb: "5px",
            color: "primary.gray_secondary"
        },
        span: {
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            mr: "10px",
            color: "primary.gray_secondary",
            "&:last-child": {
                fontSize: {
                    xxxl: "18px",
                    xxl: "17px",
                    msm: "16px",
                    xxs: "14px"
                },
                fontWeight: 600,
                color: "primary.main"
            }
        }
    },
    StatusAndDateText: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.gray_secondary"
    },
    StatusInfo: {
        fontWeight: 600,
        color: "primary.star_fill",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    DateInfo: {
        fontWeight: 600,
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    MoreInfoContainer: {
        ml: "-24px",
        borderTop: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        pl: "24px",
        py: "20px",
        mt: "20px",
        alignItems: "center",
    },
    MoreInfo: {
        ml: "8px",
        "& p": {
            fontWeight: 300,
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            }
        },
        h6: {
            fontWeight: 600,
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            }
        }
    },
    MoreDateInfo: {
        "& p": {
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            color: "primary.gray_secondary"
        },
        h6: {
            fontWeight: 600,
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            }
        }
    },
    BottomTotal: {
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        ml: "-24px",
        alignItems: "center"
    },
    TotalText: {
        textAlign: "center",
        h6: {
            borderRight: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
            py: "15px",
            fontWeight: 600,
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            }
        }
    },
    TotalPrice: {
        textAlign: "center",
        h6: {
            borderLeft: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
            py: "15px",
            fontWeight: 600,
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            }
        }
    },
    TotalDescription: {
        py: "15px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        ml: "15px",
        color: "primary.gray_secondary"
    },
    AddToCartButton: {
        bgcolor: "primary.main",
        color: "background.default",
        p: "8px 15px",
        borderRadius: "4px",
        fontSize: {
            xxxl: "14px",
            xxl: "13px",
            msm: "12px",
            xxs: "11px"
        },
        textTransform: "uppercase",
        fontWeight: 500,
        svg: {
            fontSize: {
                xxxl: "17px",
                xxl: "15px",
                msm: "15px",
                xxs: "14px"
            },
            mr: "10px",
            mb: "2px"
        }
    }
}