import { useState } from "react";
import { Box, Avatar, Grid, Typography, InputBase, NativeSelect, InputLabel } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

//All icons
import AddIcon from '@mui/icons-material/Add';

//Avatar Preview
import Profile from "Assets/profile.png";

//Styles
import styles from "Styles/Profile/EditProfile.styles";

//Types
export type Inputs = {
    picture: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    country: string;
    address: string;
    city: string;
    zip: string;
    additionalEmail: string;
    additionalPhone: string;
}
interface Props {
    register: UseFormRegister<Inputs>
}

const EditProfile = ({ register }: Props) => {
    const [password, setPassword] = useState<boolean>(false);
    return (
        <Box>
            <Box>
                <InputBase
                    id="picture"
                    type="file"
                    sx={{ display: "none" }}
                    {...register("picture")}
                />
                <InputLabel htmlFor="picture" sx={styles.PictureLabel}>
                    <Avatar
                        alt="Profile"
                        src={Profile}
                        sx={{
                            width: "100px",
                            height: "100px"
                        }}
                    />
                    <Box sx={styles.AddIcon}>
                        <AddIcon />
                    </Box>
                </InputLabel>
            </Box>
            <Box>
                <Typography variant="h6" component="h6" sx={styles.TitleText}>
                    Account Information
                </Typography>
                <Grid container spacing={2}>
                    <Grid item {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="firstName"
                                placeholder="First Name"
                                {...register("firstName")}
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item  {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="lastName"
                                placeholder="Last Name"
                                {...register("lastName")}
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item  {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="email"
                                placeholder="Email"
                                {...register("email")}
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item  {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="number"
                                placeholder="Number"
                                {...register("phone")}
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ position: "relative", mt: "15px" }}>
                    <InputBase
                        id="password"
                        type={password ? "text" : "password"}
                        placeholder="Password"
                        {...register("password")}
                        sx={styles.InputField}
                    />
                    <Box sx={styles.ShowOrHidePassword}>
                        {!password &&
                            <Typography variant="body1" component="p" onClick={() => setPassword(true)}>
                                show
                            </Typography>
                        }
                        {password &&
                            <Typography variant="body1" component="p" onClick={() => setPassword(false)}>
                                hide
                            </Typography>
                        }
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6" component="h6" sx={styles.TitleText}>
                    Set Address
                </Typography>
                <Box>
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
                    <Grid item {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="city"
                                {...register("city")}
                                placeholder="City"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="zip"
                                {...register("zip")}
                                placeholder="ZIP Code"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="email"
                                {...register("additionalEmail")}
                                placeholder="Email"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item {...{ msm: 6, xxs: 12 }}>
                        <Box>
                            <InputBase
                                id="phone"
                                {...register("additionalPhone")}
                                placeholder="Phone"
                                sx={styles.InputField}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};
export default EditProfile;