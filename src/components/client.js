import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as contentful from 'contentful'


export const pageQuery = graphql`
    query pageQuery {
      allContentfulPageText {
        edges {
          node {
            name
            content {
              content
            }
          }
        }
      }
    }
    `
