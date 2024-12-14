import React from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import ProductCategorySection from "./Components/ProductCategorySection";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <ProductCategorySection></ProductCategorySection>
        <ProductSection></ProductSection>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default App;
