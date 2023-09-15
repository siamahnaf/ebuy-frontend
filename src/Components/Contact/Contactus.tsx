import { Box, Typography, Grid } from "@mui/material";

//SectionHeader
import SectionHeader from "Utilis/SectionHeader";

//Data
import ContactusData from "Data/Contact/Contactus.data";

//Styles
import styles from "Styles/Contact/Contactus.styles";

const Contactus = () => {
    return (
        <Box sx={{ mb: "2em" }}>
            <SectionHeader
                title="Contact"
                abbreviation="Us"
                description="Get our information"
            />
            <Box sx={styles.TextContainer}>
                <Typography variant="h5" component="h5">
                    {ContactusData.title}
                </Typography>
                <Typography variant="body1" component="p">
                    {ContactusData.description}
                </Typography>
            </Box>
            <Grid container spacing={3}>
                {ContactusData.contacts.length > 0 &&
                    ContactusData.contacts.map((contact, i) => (
                        <Grid item {...{ md: 6 }} key={i}>
                            <Box sx={styles.ListContainer}>
                                <Typography variant="h6" component="h6">
                                    0{i + 1}. {contact.name}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {contact.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Contactus;