const axios = require("axios");

// factory function
const buildHttpClient = (defaultHeaders = {}) => {
  // wrapper for fetch
  return {
    get: async (url, headers = {}) => {
      /* 
      const response = await axios({
      method: "get",
      url,
      });
      return response.data; 
      */

      const { data } = await axios.get(url, {
        headers: { ...defaultHeaders, ...headers },
      });
      return data;
    },

    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url) => {},
  };
};

module.exports = {
  httpClient: buildHttpClient,
};
