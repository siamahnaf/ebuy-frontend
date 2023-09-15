import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import News from "Components/News/Single";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const SingleNews = () => {
    return (
        <Layout title="Single News- best fashion marketplace!">
            <Container maxWidth="xxxl" disableGutters sx={{ mt: { xxxl: "120px", xxl: "115px", xl: "110px", smd: "100px", xxs: "80px" }, px: { md: "15%", lsm: "5%", xxs: "3%" } }}>
                <News />

            </Container>
            <Container maxWidth="xxxl" disableGutters>
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default SingleNews;