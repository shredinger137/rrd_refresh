import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './sponsors.css'


class SkaterList extends React.Component {



  render() {

    console.log("Skaters log: " + this.props.skaterClicked);
    return (
      <StaticQuery
        query={graphql`
          query MemberListQuery {
              allContentfulMembers {
                edges {
                  node {
                    name
                    id
                    content
                    picture1 {
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
                      {data.allContentfulMembers.edges.map(({ node }) => {
                        return ( 
                            <li key={node.name}>
                            <img src={node.picture1.file.url} className="img-fluid text-center" alt={node.name} key={node.picture1.file.url} onClick={() => this.props.togglePopup(node.name)}/> 
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

export default SkaterList;
