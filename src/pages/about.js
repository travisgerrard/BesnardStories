import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        After arriving home from visiting Besnard in the summer of 2019 my
        children started asking for stories when going #2. Specifically, they
        wanted Besnard stories with Birch, Maple, Dylan and Georgia. I think
        Stacey told the first story. Since then, many stories have been told.
        Most undocumented. Then, in March 2020, my Granny Nikki told her first
        Besnard story. Subsequently, when Granny Nikki and Grandpa Peter were
        spending their Spring 2020 at Besnard, they wrote and emailed stories to
        the 4 adventurers. This website is these stories in an organized format.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
