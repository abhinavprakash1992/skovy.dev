import React from "react";
import { graphql, PageRendererProps } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Query } from "../generated/graphql";
import { BlogAllPosts } from "../components/blog/all-posts";
import { ContentContainer } from "../components/content-container";

interface Props extends PageRendererProps {
  data: Query;
}

class Blog extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All Blog Posts"
          keywords={[`blog`, `javascript`, `typescript`, `react`]}
        />
        <ContentContainer>
          <Bio />
        </ContentContainer>
        <BlogAllPosts posts={posts} />
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            series {
              name
              order
            }
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
