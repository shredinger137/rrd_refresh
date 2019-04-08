import React from 'react'
import get from 'lodash/get';
import { graphql } from 'gatsby';

export default class GetInvolved extends React.Component {

  render() {

    const pagetext = get(this, 'props.data.allContentfulPageText.edges');

    return (
      <div>
      {console.log(this.pagetext)}
      </div>
    )
  }
}


export const testQuery = graphql`
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
