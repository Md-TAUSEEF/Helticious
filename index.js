const dotenv = require("dotenv");
dotenv.config({ path: "./Config/config.env" });
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const router = require("./Router/User_router");
const contactrouter = require("./Router/Contact_router");
const connectdb = require("./DataBaseconnection/Mongoosecnt");

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactrouter);

// Serve static files
app.use(express.static(path.join(__dirname, 'Client', 'build')));

// Handle all other routes with index.html for a SPA
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

connectdb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
    process.exit(1);
  });
