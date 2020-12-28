# AviaSBL
 
![Version](https://img.shields.io/npm/v/aviasbl) ![Downloads](https://img.shields.io/npm/dw/aviasbl) ![Discord](https://img.shields.io/discord/785716040100479027?logo=discord)

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)

## About
AviaSBL is a simple npm package which allows you to easily interact with the AviaSBL API.

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install aviasbl:

```bash
npm install aviasbl
```

## Usage
This is a very simple example of how you can use this package. You can replace the id (490559747473539099) with any valid discord user ID.
```js
const aviaSBL = require('aviasbl');

//Fetch a user's info
aviaSBL('490559747473539099').then((response) => {
    console.log(response)
    //Response: { status: 'ok', hasPremium: 'true', isBanned: 'false' }
})
```

## Support
If you need any help with this package, you can join our [discord server](https://discord.com/invite/HtbVXdyrXf).