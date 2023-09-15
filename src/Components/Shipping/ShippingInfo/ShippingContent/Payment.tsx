import { useState } from "react";
import { Box, Stack, Typography, FormControlLabel, Checkbox, Grid } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

//Images
import Paypal from "Assets/payment/paypal.png";
import Card from "Assets/payment/card.png";
import Mobile from "Assets/payment/mobile.png";

//Import Types
import { Inputs } from "./Address";

//Styles
import styles from "Styles/Shipping/Payment.styles";

//Types
interface Props {
    register: UseFormRegister<Inputs>
}

const Payment = ({ register }: Props) => {
    const [payments, setPayments] = useState<string>("");
    const paymentHander = (payment: string) => {
        setPayments(payment)
    }
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Payment Method
            </Typography>
            <Box sx={{ mt: "1.5em" }}>
                <Grid container spacing={2}>
                    <Grid item {...{ sm: 4, xxs: 12 }}>
                        <Box
                            onClick={() => paymentHander("paypal")}
                            className={payments === "paypal" ? "selected" : ""}
                            sx={styles.PaymentCard}
                        >
                            <Box component="img" width="80px" src={Paypal} alt="Paypal" />
                        </Box>
                    </Grid>
                    <Grid item {...{ sm: 4, xxs: 12 }}>
                        <Stack
                            direction="row"
                            className={payments === "card" ? "selected" : ""}
                            onClick={() => paymentHander("card")}
                            sx={styles.PaymentCard}
                        >
                            <Box component="img" src={Card} alt="Card" sx={styles.smallImages} />
                            <Typography variant="body1" component="p" sx={styles.Text}>
                                Debit or credit card
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item {...{ sm: 4, xxs: 12 }}>
                        <Stack
                            direction="row"
                            className={payments === "mobile" ? "selected" : ""}
                            onClick={() => paymentHander("mobile")}
                            sx={styles.PaymentCard}
                        >
                            <Box component="img" src={Mobile} alt="Mobile" sx={styles.smallImages} />
                            <Typography variant="body1" component="p" sx={styles.Text}>
                                Mobile banking
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ mt: "2em" }}>
                    <Box>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label={
                                <Typography variant="body1" component="p" sx={styles.CheckBoxText}>
                                    Save data for future parchases
                                </Typography>
                            }
                            labelPlacement="end"
                            {...register("saveData")}
                        />
                    </Box>
                    <Box>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label={
                                <Typography variant="body1" component="p" sx={styles.CheckBoxText}>
                                    I confirm that i have read and understood the Terms and conditions and Privacy policy
                                </Typography>
                            }
                            labelPlacement="end"
                            {...register("terms")}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default Payment;