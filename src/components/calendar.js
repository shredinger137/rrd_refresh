

const contentful = require("contentful");
const client = contentful.createClient({
  space: "ypg5e55nvkzw",
  accessToken: "d19e22db369e56f049bf26444c1dc498e96fc8aad369b9fc87ba54b90c7fba3b"

});

client.getEntry("LM0TXRm0IAkaqxvwtpMtU").then(entry => console.log(entry)).catch(err => console.log(err))
