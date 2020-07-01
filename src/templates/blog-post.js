import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1
          css={css`
            color: #3e5314;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <div>
          <h3
            css={css`
              color: #8a7447;
              display: inline-block;
            `}
          >
            By: {post.frontmatter.author}
          </h3>
          <h3
            css={css`
              color: #8a7447;
              float: right;
            `}
          >
            {post.frontmatter.date}
          </h3>
        </div>
        <div
          css={css`
            color: #25280f;
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
      excerpt
    }
  }
`
