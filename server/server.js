const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "FeelTheGlow900!",
  database: "av_store",
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;

  db.query(
    "INSERT INTO addProduct(title, productDescription, price) VALUES (?, ?, ?)",
    [title, description, price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.get('/products', (req, res) =>{
    db.query("SELECT * FROM Products", (err, result)=>{
        if (err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
app.listen(3001, () => {
  console.log("yes love 3001");
});
