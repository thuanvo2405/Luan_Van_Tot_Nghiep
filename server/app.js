const express = require("express");
const app = express();
const port = 3000;

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello from your simple Express app!");
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
