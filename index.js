//AviaSBL API
//Written by SoCuul

const axios = require('axios');

module.exports = async (userID) => {
  const apiURL = 'https://api.aviasbl.socuul.dev/'

  if(!userID) return 'Error: No id was provided';

  try {
    const response = await axios.get(apiURL + userID);
    return(response.data);
  } catch (error) {
    if(error.response.status == '400'){
      return(error.response.data);
    }else{
      let servererror = {
        "status": "error",
        "error": "Internal server error"
      }
      return(servererror)
    }
  }
}