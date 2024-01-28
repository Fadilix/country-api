const { countries } = require("../database/countriesData")

const getDefaultRoute = async (req, res) => {
    return res.json({ msg: "Welcome to the free country API" })
}

const getAllCountries = async (req, res) => {
    return res.json({ data: countries })
}

const getCountryByName = async (req, res) => {
    const { country } = req.params;
    try {

        const filteredCountries = countries.filter(
            (countrY) => countrY.name.toLowerCase() === country.toLowerCase()
                ||
                countrY.name.toLowerCase().includes(country.toLowerCase()));
        return res.json({ data: filteredCountries });
    } catch (error) {
        console.log(error);
        return res.status(404).json(
            {
                msg: "Country not found",
                status: 404
            }
        );
    }
};

const getCountryByCode = async (req, res) => {
    const { code } = req.params;
    try {

        const filteredCountries = countries.filter(
            (country) => country.countryCode.toLowerCase() === code.toLowerCase()
                ||
                country.countryCode.toLowerCase().includes(code.toLowerCase())
        )
        return res.status(200).json({ data: filteredCountries });
    } catch (error) {
        console.log(error);
        return res.status(404).json(
            {
                msg: "Country code not found",
                status: 404
            }
        );
    }
}


// exporting the controllers
module.exports = {
    getAllCountries,
    getDefaultRoute,
    getCountryByName,
    getCountryByCode,
};