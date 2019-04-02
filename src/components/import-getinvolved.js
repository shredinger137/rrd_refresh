import React from 'react'
import * as contentful from 'contentful'
import BlogItem from '../components/blogItem'


class ImportStuff extends React.Component {

  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'ypg5e55nvkzw',
    accessToken: 'd19e22db369e56f049bf26444c1dc498e96fc8aad369b9fc87ba54b90c7fba3b'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </div>
    )
  }
}
export default ImportStuff
