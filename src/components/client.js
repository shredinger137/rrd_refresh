
const contentful = require("contentful");
const client = contentful.createClient({
  space: "ypg5e55nvkzw",
  accessToken: "d19e22db369e56f049bf26444c1dc498e96fc8aad369b9fc87ba54b90c7fba3b"

});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("LM0TXRm0IAkaqxvwtpMtU")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));
