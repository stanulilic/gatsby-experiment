import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="home page">
      <h1>Welcome to my Gatsby site!</h1>
      <StaticImage
        src="../images/clifford.jpeg"
        alt="This is an image of an animal, am just lazy coming up with a description"
      />
    </Layout>
  );
};

export default IndexPage;
