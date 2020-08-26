const express = require("express"); // express jobs is to go to database
const app = express(); //invoke
const port = 5000;
const axios = require("axios"); // axios job to fetch the data
const cors = require("cors"); //to show the frontend;

app.use(cors()); //invoke cors
app.get("/finland", async (req, res, next) => {
  axios
    .get("https://covid19.mathdro.id/api/countries/FIN")
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`This is my app, running is localhost and it's port is ${port}`);
});
