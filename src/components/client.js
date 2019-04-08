import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as contentful from 'contentful'


export const pageQuery = graphql`
  query pageQuery {
    allContentfulPageText(filter:{name:{eq:"get_involved"}})
    {
      edges {
        node {
          content {
            content
          }
        }
      }
    }
  }
`
