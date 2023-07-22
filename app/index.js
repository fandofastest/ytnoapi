const youtube = require("youtube-search-api");


const express = require('express');
const app = express();
const port = 3000;




app.get('/search/:id', (req, myres) => {
    youtube
  .GetListByKeyword(req.params.id, false, 25, [{ type: "video" }])
  .then((res) => {
    console.log("Page1");
    console.log(res);
    myres.json(res);

  })
  .catch((err) => {
    console.log(err);
  });
  
});

app.get('/details/:id', (req, myres) => {
    youtube
  .GetVideoDetails(req.params.id)
  .then((res) => {
    console.log("Page1");
    console.log(res);
    myres.json(res);

  })
  .catch((err) => {
    console.log(err);
  });
  
});

app.get('/channel/:id', (req, myres) => {
    youtube
  .GetChannelById(req.params.id)
  .then((res) => {
    console.log("Page1");
    console.log(res);
    myres.json(res);

  })
  .catch((err) => {
    console.log(err);
  });
  
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});