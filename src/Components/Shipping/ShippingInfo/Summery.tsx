import { Dispatch, SetStateAction } from "react";
import { Box, ButtonBase, Stack, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import styles from "Styles/Shipping/Summery.styles";

//Types
interface Props {
    setActiveStep: Dispatch<SetStateAction<number>>;
    activeStep: number;
    steps: number;
}

const Summery = ({ setActiveStep, activeStep, steps }: Props) => {
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Box sx={{ mt: "20px" }}>
            <Typography variant="h6" component="h6" sx={styles.SummeryTitle}>
                Order Summery
            </Typography>
            <Box sx={styles.SummeryContainer}>
                <List dense disablePadding sx={styles.List}>
                    <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                        <Typography variant="body1" component="h6">
                            Subtotal
                        </Typography>
                        <Typography variant="body1" component="p">
                            $450
                        </Typography>
                    </ListItem>
                    <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                        <Typography variant="body1" component="h6">
                            Shipping
                        </Typography>
                        <Typography variant="body1" component="p">
                            $50
                        </Typography>
                    </ListItem>
                    <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                        <Typography variant="body1" component="h6">
                            Estimate for
                        </Typography>
                        <Typography variant="body1" component="p">
                            United Kingdom
                        </Typography>
                    </ListItem>
                    <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                        <Typography variant="body1" component="h6">
                            Total
                        </Typography>
                        <Typography variant="body1" component="p">
                            $500
                        </Typography>
                    </ListItem>
                </List >
                <Stack>
                    <Box sx={styles.NextButtons}>
                        {activeStep >= steps - 1 &&
                            <ButtonBase
                                type="submit"
                            >Pay</ButtonBase>
                        }
                        {activeStep < steps - 1 &&
                            <ButtonBase onClick={handleNext}>Next</ButtonBase>
                        }
                    </Box>
                    <Box sx={styles.BackButton}>
                        {activeStep > 0 &&
                            <ButtonBase
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back{" "}
                                {activeStep === 1 ? "Order" : (activeStep === 2 ? "Shipping" : "")}
                            </ButtonBase>
                        }
                        {activeStep === 0 &&
                            <Link href="/">
                                <a>
                                    <ButtonBase
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        Back Cart
                                    </ButtonBase>
                                </a>
                            </Link>
                        }
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};
export default Summery;