import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            color: #3e5314;
            border-bottom: 1px solid;
          `}
        >
          Besnard Stories
        </h1>
        <img
          src="https://res.cloudinary.com/dehixvgdv/image/upload/v1595450909/Besnard%20Stories/IMG_2866.jpg"
          alt="Georgia Picture"
        />
        <h4
          css={css`
            color: #3e5314;
          `}
        >
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                  color: #3e5314;
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #8a7447;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p
                css={css`
                  color: #25280f;
                `}
              >
                {node.excerpt}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
