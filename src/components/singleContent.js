import React from "react"
var contentful = require('contentful')



export default class SingleContent extends React.Component {

render() {
  var content;
  const client = contentful.createClient({
    space: "ypg5e55nvkzw",
    accessToken: "d19e22db369e56f049bf26444c1dc498e96fc8aad369b9fc87ba54b90c7fba3b"
  })
  client.getEntry('6W8I71USqy1hbYPQFzxNiu')
  .then(function (entry) {
    content = entry.fields.content;
  })
  return (content)
}
}
