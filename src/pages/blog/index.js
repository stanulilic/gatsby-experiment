import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {data.allMdx.nodes.map((post) => (
        <article key={post.id}>
          <Link to={`/blog/${post.slug}`}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <p>Posted: {post.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query PostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        slug
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        body
      }
    }
  }
`;
export default BlogPage;
