import { Box, Grid, Typography, InputBase, ButtonBase } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//Images
import Contact from "Assets/contact.png";

//Styles
import styles from "Styles/Contact/Forms.styles";

//Types
type Inputs = {
    message: string;
    name: string;
    phone: string;
    email: string;
}

const Forms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    return (
        <Box sx={{ mt: "3em" }}>
            <Grid container spacing={5}>
                <Grid item {...{ xxxl: 9, xxl: 8.5, lg: 7.5, md: 7, xxs: 12 }}>
                    <Box sx={{ py: "1.5em" }}>
                        <Box sx={styles.Text}>
                            <Typography variant="h6" component="h6">
                                Contact Form
                            </Typography>
                            <Typography variant="h5" component="h5">
                                Drop us a Line
                            </Typography>
                            <Typography variant="body1" component="p">
                                Your email address will not be published. Required fields are marked <Typography variant="body1" component="span">
                                    *
                                </Typography>
                            </Typography>
                        </Box>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <InputBase
                                    multiline
                                    minRows={7}
                                    maxRows={7}
                                    placeholder="Message *"
                                    {...register("message")}
                                    sx={styles.InputBase}
                                />
                            </Box>
                            <Grid container spacing={1.5}>
                                <Grid item {...{ sm: 6, xxs: 12 }}>
                                    <InputBase
                                        placeholder="Name *"
                                        {...register("name")}
                                        sx={styles.InputBase}
                                    />
                                </Grid>
                                <Grid item {...{ sm: 6, xxs: 12 }}>
                                    <InputBase
                                        placeholder="Phone *"
                                        {...register("phone")}
                                        sx={styles.InputBase}
                                    />
                                </Grid>
                            </Grid>
                            <Box>
                                <InputBase
                                    placeholder="Email *"
                                    {...register("email")}
                                    sx={styles.InputBase}
                                />
                            </Box>
                            <Box>
                                <ButtonBase type="submit" sx={styles.SubmitButton}>
                                    Send Message
                                </ButtonBase>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item {...{ xxxl: 3, xxl: 3.5, lg: 4.5, md: 5 }} sx={{ display: { md: "block", xxs: "none" } }}>
                    <Box component="img" sx={styles.Image} src={Contact} alt="Contact" />
                </Grid>
            </Grid>
        </Box>
    );
};
export default Forms;