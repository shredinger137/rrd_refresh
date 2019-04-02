import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as contentful from 'contentful'

const Client = () => (

{
    contentfulPageText(filter: { name: { eq: 'get-involved' } })  {
      name
      content
    }
  }

)

export default Client
