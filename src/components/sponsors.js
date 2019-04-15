import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './sponsors.css'

class SponsorList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SponsorListQuery {
              allContentfulSponsors {
                edges {
                  node {
                    name
                    id
                    link
                    logo {
                      id
                      file {
                        url
                        fileName
                        contentType
                      }
                    }
                  }
                }
              }
            }
      `   }

        render={data => (

                <div className="sponsors">
                    <ul className="sponsor_list">
                      {data.allContentfulSponsors.edges.map(({ node }) => {
                        return (

                            <li key={node.id}>
                            <a href={node.link} target="sponsors_new" key={node.link}>
                            <img src={node.logo.file.url} className="img-fluid text-center" alt={node.name} key={node.logo.fileName}/></a>
                            <br/>
                            <p key={node.name}>{node.name}</p>

                            </li>
                        );
                      })}
                    </ul>
                  </div>

        )}
      />
    );
  }
}

export default SponsorList;
