import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Newschip from "Components/News/Newschips";
import Newsfilter from "Components/News/Newsfilters";
import Top from "Components/News/Top";
import Trending from "Components/News/Trending";
import Newses from "Components/News/Newses";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip"

const News = () => {
    return (
        <Layout title="News - best fashion marketplace!">
            <Container maxWidth="xxxl" disableGutters sx={{ mt: { xxxl: "110px", xxl: "100px", xl: "90px", smd: "80px", xxs: "70px" } }}>
                <Newschip />
                <Newsfilter />
                <Top />
                <Trending />
                <Newses />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default News;