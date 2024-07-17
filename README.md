# Free Country API

Welcome to the Free Country API! This API provides information about various countries, including details like country names and country codes.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Endpoints](#endpoints)
  - [Get All Countries](#get-all-countries)
  - [Get Country by Name](#get-country-by-name)
  - [Get Country by Code](#get-country-by-code)

## Introduction

This API is designed to offer free access to country-related data, allowing developers to retrieve information about different countries.

## Getting Started

### Installation

To use this API, follow these steps:

1. Clone the repository: `git clone https://github.com/Fadilix/country-api.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Usage

Make requests to the specified endpoints to retrieve information about countries.

## Endpoints

### Get All Countries

- **URL:** `/api/countries`
- **Method:** `GET`
- **Description:** Retrieve a list of all countries.
- **Example response:**

```json
{
  "data": [
    {
      "name": "Afghanistan",
      "code": "AF"
    },
    {
      "name": "Åland Islands",
      "code": "AX"
    },
    {
      "name": "Albania",
      "code": "AL"
    }
    // other countries...
  ]
}
```

### Get Country by Name

- **URL:** `/api/countries/:countryName`
- **Method:** `GET`
- **Description:** Retrieve information about a specific country by its name.
- **Example response:**

```json
{
  "data": [
    {
      "name": "Canada",
      "code": "CA"
    }
  ]
}
```

### Get Country by Code

- **URL:** `/api/countries/code/:countryCode`
- **Method:** `GET`
- **Description:** Retrieve information about a specific country by its country code.
- **Example response:**

```json
{
  "data": [
    {
      "name": "Albania",
      "code": "AL"
    }
  ]
}
```
