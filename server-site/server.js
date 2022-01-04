require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT;
const connectDatabase = require("./config/dbConfig");


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});



/*
  -------- Mongodb Connection --------
 */
connectDatabase();

/*
  -------- server status --------
 */

// local server: http://localhost:9009/
app.listen(PORT, () => {
  console.log("Server is running on : ", PORT);
});

// Confirm server conenction  section
app.get("/server", (req, res) => {
  res.send("Connected with eCommerce server successfully...status: 200 OK");
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
