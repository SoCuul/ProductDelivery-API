# ProductDelivery API
 
![Version](https://img.shields.io/npm/v/productdelivery-api?logo=npm) ![Downloads](https://img.shields.io/npm/dw/productdelivery-api?logo=npm) ![Discord](https://img.shields.io/discord/803063436174032987?logo=discord)

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Support](#support)

## About
ProductDelivery-API is a simple wrapper for the [ProductDelivery](https://github.com/socuul/productdelivery) API.

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install productdelivery-api:

```bash
npm install productdelivery-api
```

## Usage
To use this package, you first need to create a client.
```js
const pdAPI = require('productdelivery-api');
const client = new pdAPI('APIUrl', 'Default Token (Optional)');

(async () => {
    try {
        let request = await client.checkWhitelist('GuildID', 'RobloxID', 'Product Name');
        console.log(request); // Returns false
    }
    catch (error) {
        console.log(error);
    }
})();
```

## Functions

### Get Default Values
#### Name: getDefaultValues
#### Params: 
* value: `apiURL`, `token`
#### Example:
```js
(async () => {
    try {
        let request = client.getDefaultValues(value);
        console.log(request);
    }
    catch (error) {
        console.log(error);
    }
})();
```

### Check Whitelist
#### Name: checkWhitelist
#### Params: 
* guildid
* robloxid
* productname
#### Example:
```js
(async () => {
    try {
        let request = await client.checkWhitelist('GuildID', 'RobloxID', 'Product Name');
        console.log(request);
    }
    catch (error) {
        console.log(error);
    }
})();
```

### Get Guild Products
#### Name: getGuildProducts
#### Params: 
* guildid
* overwriteToken: (optional)
#### Example:
```js
(async () => {
    try {
        let request = await client.getGuildProducts('GuildID', 'Overwrite Token');
        console.log(request);
    }
    catch (error) {
        console.log(error);
    }
})();
```

### Get User Products
#### Name: getUserProducts
#### Params: 
* guildid
* robloxid
* overwriteToken: (optional)
#### Example:
```js
(async () => {
    try {
        let request = await client.getUserProducts('GuildID', 'RobloxID', 'Overwrite Token');
        console.log(request);
    }
    catch (error) {
        console.log(error);
    }
})();
```

### Create Purchase
#### Name: createPurchase
#### Params: 
* guildid
* robloxid
* productname
* overwriteToken: (optional)
#### Example:
```js
(async () => {
    try {
        let request = await client.createPurchase('GuildID', 'RobloxID', 'Product Name', 'Overwrite Token');
        console.log(request);
    }
    catch (error) {
        console.log(error);
    }
})();
```

## Support
If you need any help with this package, you can join our [discord server](https://discord.com/invite/cGW5vdNV3t).