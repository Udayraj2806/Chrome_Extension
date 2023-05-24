const express = require("express");
const Axios = require("axios");
const fs = require("fs");
// const exphbs = require("express-handlebars");
// const dbConnect = require("./dbConnect");
// const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");
// const itemsRoute = require("./routes/itemsRoute");
// const usersRoute = require("./routes/userRoute");
// const billsRoute = require("./routes/billsRoute");

// app.use("/api/items/", itemsRoute);
// app.use("/api/users/", usersRoute);
// app.use("/api/bills/", billsRoute);

// const path = require("path");

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// }

// const port = process.env.PORT || 5000;
const CryptoJS = require("crypto-js");
// const Global_Cipher;
// // Define the plaintext and the key
// const plaintext = "Hello, world!";
// const key = "MySecretKey123";

// // Encrypt the plaintext with AES using the key
// const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();

// // Decrypt the ciphertext with AES using the key
// const decryptedPlaintext = CryptoJS.AES.decrypt(ciphertext, key).toString(
//   CryptoJS.enc.Utf8
// );

// // Output the results
// console.log("Plaintext: " + plaintext);
// console.log("Ciphertext: " + ciphertext);
// console.log("Decrypted plaintext: " + decryptedPlaintext);
app.post("/text", (req, res) => {
  try {
    const plaintext = req.body.text1;
    const key = req.body.key;
    const Global_Cipher = CryptoJS.AES.encrypt(plaintext, key).toString();
    const decryptedPlaintext = CryptoJS.AES.decrypt(
      Global_Cipher,
      key
    ).toString(CryptoJS.enc.Utf8);
    fs.writeFile("plaintext2.txt", Global_Cipher, (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("plaintext2.txt", "utf8"));
      }
    });
    fs.writeFile("plaintext1.txt", decryptedPlaintext, (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("plaintext1.txt", "utf8"));
      }
    });
    res.send(Global_Cipher);
  } catch (error) {
    console.log("error");
  }
});
app.get("/home", (req, res) => {
  res.send(Global_Cipher);
});

app.get("/getcipher", (req, res) => {
  try {
    const filePath = "plaintext2.txt";
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else res.send(data);
    });
  } catch (e) {
    console.log(e);
  }
});
// app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));
// const express = require("express");
// const dbConnect = require("./dbConnect");

// const app = express();
// app.use(express.json());
// const itemsRoute = require("./routes/itemsRoute");
// const usersRoute = require("./routes/userRoute");
// const billsRoute = require("./routes/billsRoute");

// app.use("/api/items/", itemsRoute);
// app.use("/api/users/", usersRoute);
// app.use("/api/bills/", billsRoute);

// const path = require("path");

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// }
// app.post("/getText", async (req, res) => {
//   try {
//     const newitem = req.params;
//     // await newitem.save();
//     console.log(req.body.key);
//     const text = req.body.text1;
//     const key = req.body.key;
//     try {
//       await Axios.post("http://localhost:5000/getText", {
//         text,
//         key,
//       })
//         .then((res) => console.log("Posting data"))
//         .catch((err) => console.log(err));
//       res.send("Item added successfully");
//     } catch (err) {
//       res.status(400).json(err);
//     }
//     res.send("Item added successfully");
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));
