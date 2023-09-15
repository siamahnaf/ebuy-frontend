import { Box, Grid, Typography, InputBase, NativeSelect, RadioGroup, FormControlLabel, Radio, Stack } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

//All icons
import AddIcon from "@mui/icons-material/Add";

//Styles
import styles from "Styles/Shipping/Address.styles";

//Types
export type Inputs = {
    firstName: string;
    lastName: string;
    country: string;
    address: string;
    city: string;
    zip: string;
    email: string;
    phone: string;
    method: string;
    saveData: string;
    terms: string;
}
interface Props {
    register: UseFormRegister<Inputs>
}

const Address = ({ register }: Props) => {
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Shipping Address
            </Typography>
            <Box sx={{ mt: "1.5em" }}>
                <Grid container spacing={2}>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="firstNmae"
                                {...register("firstName")}
                                placeholder="First Name"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="lastName"
                                {...register("lastName")}
                                placeholder="Last Name"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: "15px" }}>
                    <NativeSelect
                        {...register("country")}
                        sx={styles.Select}
                    >
                        <option value="">Country/Region</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="china">China</option>
                        <option value="japan">Japan</option>
                        <option value="america">America</option>
                    </NativeSelect>
                </Box>
                <Box>
                    <InputBase
                        id="address"
                        {...register("address")}
                        placeholder="Address"
                        sx={styles.InputField}
                    />
                </Box>
                <Typography variant="body1" component="p" sx={styles.AdditionalInfo}>
                    <AddIcon />
                    Aditional Address
                </Typography>
                <Grid container spacing={2}>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="city"
                                {...register("city")}
                                placeholder="City"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="zip"
                                {...register("zip")}
                                placeholder="ZIP Code"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="email"
                                {...register("email")}
                                placeholder="Email"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="phone"
                                {...register("phone")}
                                placeholder="Phone"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: "20px" }}>
                    <RadioGroup
                        aria-label="method"
                        {...register("method")}
                    >
                        <FormControlLabel
                            value="free"
                            control={<Radio size="small" />}
                            sx={{ mb: "10px", ".MuiFormControlLabel-label": { flex: 1 } }}
                            label={
                                <Stack direction="row" sx={{ alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="h6" component="h6" sx={styles.RadioButtonHeading}>
                                            Standard Shipping
                                        </Typography>
                                        <Typography variant="body1" component="p" sx={styles.RadioButtonText}>
                                            Delivary Within 6-10 Days
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flex: 1, textAlign: "right" }}>
                                        <Typography variant="body1" component="p" sx={styles.RadioButtonHeading}>
                                            Free
                                        </Typography>
                                    </Box>
                                </Stack>
                            }
                        />
                        <FormControlLabel
                            value="express"
                            control={<Radio size="small" />}
                            sx={{ ".MuiFormControlLabel-label": { flex: 1 } }}
                            label={
                                <Stack direction="row" sx={{ alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="h6" component="h6" sx={styles.RadioButtonHeading}>
                                            Express Shipping
                                        </Typography>
                                        <Typography variant="body1" component="p" sx={styles.RadioButtonText}>
                                            Delivary Within 4-6 Days
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flex: 1, textAlign: "right" }}>
                                        <Typography variant="body1" component="p" sx={styles.RadioButtonHeading}>
                                            $10
                                        </Typography>
                                    </Box>
                                </Stack>
                            }
                        />
                    </RadioGroup>
                </Box>
            </Box>
        </Box>
    );
};
export default Address;