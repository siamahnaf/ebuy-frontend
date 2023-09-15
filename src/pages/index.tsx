import { Container } from "@mui/material";

// Layout
import Layout from "Layout";

//Components
import Carousels from "Components/Home/Carousels";
import Category from "Components/Home/Category";
import FeaturesProduct from "Components/Home/FeaturesProduct";
import Collections from "Components/Home/Collections";
import Top from "Components/Home/Top";

//Common Components
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Home = () => {
  return (
    <Layout title="eBuy- Best fashion marketplace" active="home">
      <Container disableGutters maxWidth="xxxl" sx={{ p: "0" }}>
        <Carousels />
      </Container>
      <Container maxWidth="xxxl" disableGutters>
        <Category />
        <FeaturesProduct />
        <Collections />
        <Top />
        <Subscribe />
        <Clip />
      </Container>
    </Layout >
  );
};
export default Home;