const express = require("express");
const app = express();
const port = 4000

const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

const middleware=(req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 18) {
    next();
  } else {
    res.send("serverClose");
  }

}
app.use(middleware);


app.get("/style.css", (req, res) => {
  res.sendFile(__dirname+"/views/style.css");
});


app.get("/", (req, res) => {
  res.sendFile(__dirname+"/views/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname+"/views/contact-us.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname+"/views/ourServices.html");
});



app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
});
