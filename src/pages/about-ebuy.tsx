import { Container, Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Breadcrumbs
import Breadcrumb from "Utilis/Breadcrumb";

//Components
import AboutUs from "Components/About/Aboutus";
import Provides from "Components/About/Provides";
import Performance from "Components/About/Performance";
import Awards from "Components/About/Awards";
import Team from "Components/About/Team";

//Subscribe && Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const About = () => {
    return (
        <Layout title="About Ebuy - best fashion marketplace">
            <Box sx={{ mt: { xxxl: "110px", xxl: "100px", xl: "90px", smd: "80px", xxs: "70px" } }}>
                <Breadcrumb
                    title="About us"
                />
                <Container maxWidth="xxxl" disableGutters>
                    <AboutUs />
                    <Provides />
                    <Performance />
                    <Awards />
                    <Team />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default About;