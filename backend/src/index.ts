import app from "./app.js";
import { connectToDataBase } from "./db/connection.js";

//connnections

const PORT = process.env.PORT || 5000

connectToDataBase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server open and connected to db 🙌");
    });
  })
  .catch((error) => {
    console.log(error);
  });
