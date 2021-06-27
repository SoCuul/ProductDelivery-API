//ProductDelivery API
//Written by SoCuul

const axios = require('axios');
let instance

class Client {
    constructor(url, token) {
        //Check for updates
        (async () => {
            try{
                //Make GitHub API Request
                let updaterequest = await axios.get('https://registry.npmjs.org/productdelivery-api/')

                //Compare versions
                //Current Version
                let unparsedcurrentversion = require('./package.json').version
                let currentversion = unparsedcurrentversion.replace(/\./g, "")
                //Repo Version
                let unparsedrepoversion = updaterequest.data['dist-tags'].latest
                let repoversion = unparsedrepoversion.replace(/\./g, "")

                //Check for numbers
                if(!isNaN(currentversion) && !isNaN(repoversion)){
                    if(Number(repoversion) > Number(currentversion)){
                        console.log('[ProductDelivery-API] There is a new version of this package. Install it with npm install productdelivery-api@latest')
                        console.log(`[ProductDelivery-API] Current Version: ${unparsedcurrentversion}`)
                        console.log(`[ProductDelivery-API] New Version: ${unparsedrepoversion}`)
                    }
                }
            }
            catch(error){
                return
            }
        })()

        //Check for variables
        if(!url) throw new Error('Please provide an API URL for the client')

        //Check for variable types
        if(typeof url !== "string") throw new TypeError('The provided API URL must be a string')
        if(token && typeof token !== "string") throw new TypeError('The provided token must be a string')

        //Set variables
        this.apiURL = url
        this.token = token

        //Set axios config
        instance = axios.create({
            baseURL: url,
            headers: {
                usesnpmpackage: true
            }
        })
    }

    getDefaultValues(value) {
        //Check for input
        if(!value) throw new Error('No value was provided')

        if(value === 'apiURL'){
            return this.apiURL
        }
        else if(value === 'token'){
            return this.token
        }
        else{
            throw new Error('Invalid value')
        }
    }

    async checkWhitelist(guildid, robloxid, productname) {
        //Check for variables
        if(!guildid) throw new Error('No guild ID was provided')
        if(!robloxid) throw new Error('No Roblox ID was provided')
        if(!productname) throw new Error('No product name was provided')

        //Check for variable types
        if(typeof guildid !== "string") throw new TypeError('The provided guild ID must be a string')
        if(typeof robloxid !== "string") throw new TypeError('The provided Roblox ID must be a string')
        if(typeof productname !== "string") throw new TypeError('The provided product name must be a string')

        //Make request
        try{
            const request = await instance.get(this.apiURL + '/whitelist', {
                params: {
                    guildid: guildid,
                    robloxid: robloxid,
                    productname: productname
                }
            })
            
            //Return response
            return request.data
        }
        catch(error){
            //Check if the response exists
            if(error.response && error.response.status){
                //Check if error code is valid
                if(error.response.status == '400' || error.response.status == '404'){
                    //Return response error
                    return error.response.data
                }
                //Server error
                else{
                    //Return server error
                    return {
                        "error": "Server Error"
                    }
                }
            }
            //Unknown error
            else{
                //Return unknown error
                return {
                    "error": "Unknown Error",
                    "nodeError": error
                }
            }
        }
    }

    async getGuildProducts(guildid, overwriteToken) {
        //Get token
        let token = overwriteToken || this.token
        
        //Check for variables
        if(!token) throw new Error('No token was provided')
        if(!guildid) throw new Error('No guild ID was provided')

        //Check for variable types
        if(typeof token !== "string") throw new TypeError('The provided token must be a string')
        if(typeof guildid !== "string") throw new TypeError('The provided guild ID must be a string')

        //Make request
        try{
            const request = await instance.get(this.apiURL + '/products/guild', {
                params: {
                    guildid: guildid
                },
                headers: {
                    token: token
                }
            })
            
            //Return response
            return request.data
        }
        catch(error){
            //Check if the response exists
            if(error.response && error.response.status){
                //Check if error code is valid
                if(error.response.status == '400' || error.response.status == '404'){
                    //Return response error
                    return error.response.data
                }
                //Server error
                else{
                    //Return server error
                    return {
                        "error": "Server Error"
                    }
                }
            }
            //Unknown error
            else{
                //Return unknown error
                return {
                    "error": "Unknown Error",
                    "nodeError": error
                }
            }
        }
    }

    async getUserProducts(guildid, robloxid, overwriteToken) {
        //Get token
        let token = overwriteToken || this.token

        //Check for variables
        if(!token) throw new Error('No token was provided')
        if(!guildid) throw new Error('No guild ID was provided')
        if(!robloxid) throw new Error('No Roblox ID was provided')

        //Check for variable types
        if(typeof token !== "string") throw new TypeError('The provided token must be a string')
        if(typeof guildid !== "string") throw new TypeError('The provided guild ID must be a string')
        if(typeof robloxid !== "string") throw new TypeError('The provided Roblox ID must be a string')

        //Make request
        try{
            const request = await instance.get(this.apiURL + '/products/user', {
                params: {
                    guildid: guildid,
                    robloxid: robloxid
                },
                headers: {
                    token: token
                }
            })
            
            //Return response
            return request.data
        }
        catch(error){
            //Check if the response exists
            if(error.response && error.response.status){
                //Check if error code is valid
                if(error.response.status == '400' || error.response.status == '404'){
                    //Return response error
                    return error.response.data
                }
                //Server error
                else{
                    //Return server error
                    return {
                        "error": "Server Error"
                    }
                }
            }
            //Unknown error
            else{
                //Return unknown error
                return {
                    "error": "Unknown Error",
                    "nodeError": error
                }
            }
        }
    }

    async createPurchase(guildid, robloxid, productname, overwriteToken) {
        //Get token
        let token = overwriteToken || this.token

        //Check for variables
        if(!token) throw new Error('No token was provided')
        if(!guildid) throw new Error('No guild ID was provided')
        if(!robloxid) throw new Error('No Roblox ID was provided')
        if(!productname) throw new Error('No product name was provided')

        //Check for variable types
        if(typeof token !== "string") throw new TypeError('The provided token must be a string')
        if(typeof guildid !== "string") throw new TypeError('The provided guild ID must be a string')
        if(typeof robloxid !== "string") throw new TypeError('The provided Roblox ID must be a string')
        if(typeof productname !== "string") throw new TypeError('The provided product name must be a string')

        //Make request
        try{
            const request = await instance({
                method: 'post',
                url: this.apiURL + '/purchase',
                data: {
                    guildid: guildid,
                    robloxid: robloxid,
                    productname: productname
                },
                headers: {
                    token: token
                }
            })
            
            //Return response
            return request.data
        }
        catch(error){
            //Check if the response exists
            if(error.response && error.response.status){
                //Check if error code is valid
                if(error.response.status == '400' || error.response.status == '404'){
                    //Return response error
                    return error.response.data
                }
                //Server error
                else{
                    //Return server error
                    return {
                        "error": "Server Error"
                    }
                }
            }
            //Unknown error
            else{
                //Return unknown error
                return {
                    "error": "Unknown Error",
                    "nodeError": error
                }
            }
        }
    }

    async getUserInformation(robloxid) {
        // Check variables
        if(!robloxid) throw new Error('No roblox id was provided');

        // Check variable types
        if(typeof robloxid !== "string") throw new TypeError("The provided roblox ID must be a string");

        try {
            const request = await instance.get(this.apiURL + '/information/user', {
                params: {
                    robloxid: robloxid
                }
            })
            
            // Return response
            return request.data
        } catch (error) {
            //Check if the response exists
            if(error.response && error.response.status){
                //Check if error code is valid
                if(error.response.status == '400' || error.response.status == '404'){
                    //Return response error
                    return error.response.data
                }
                //Server error
                else{
                    //Return server error
                    return {
                        "error": "Server Error"
                    }
                }
            }
            //Unknown error
            else{
                //Return unknown error
                return {
                    "error": "Unknown Error",
                    "nodeError": error
                }
            }
        }
    }

    async getGuildInformation(guildid) {
        // Check variables
        if(!guildid) throw new Error('No guild id was provided');

        // Check variable types
        if(typeof guildid !== "string") throw new TypeError("The provided guild ID must be a string");

        try {
            const request = await instance.get(this.apiURL + '/information/guild', {
                params: {
                    guildid: guildid
                }
            })
            
            // Return response
            return request.data
        } catch (error) {
            //Check if the response exists
            if(error.response && error.response.status){
                //Check if error code is valid
                if(error.response.status == '400' || error.response.status == '404'){
                    //Return response error
                    return error.response.data
                }
                //Server error
                else{
                    //Return server error
                    return {
                        "error": "Server Error"
                    }
                }
            }
            //Unknown error
            else{
                //Return unknown error
                return {
                    "error": "Unknown Error",
                    "nodeError": error
                }
            }
        }
    }
}

module.exports = Client