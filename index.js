const express = require("express");
const cors = require("cors");
const countriesController = require("./controllers/countriesController");

// dotenv for accessing the environment variables
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const { env } = process;
PORT = env.PORT;

// ----------- Middlewares ----------//
app.use(express.json());
app.use(cors());


// ----------- Routes --------------//
app.get("/", countriesController.getDefaultRoute);
app.get("/api/countries", countriesController.getAllCountries);
app.get("/api/country/:country", countriesController.getCountryByName);
app.get("/api/code/:code", countriesController.getCountryByCode);

// PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})