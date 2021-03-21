require("tools-for-instagram");
const path = require('path');

(async () => {
  const ig = await login();
  const caption = "Some random meme.";
  // const rsp = await uploadPictureByUrl(ig, caption, 'https://i.pinimg.com/474x/d6/cb/00/d6cb008bc1291154467fd223ec8df556.jpg');

  let imagePath = path.join(__dirname, '/images/image.jpg');
  const rsp = await uploadPicture(ig, caption, imagePath);
})();