import axios from "axios";

// factory function
export const buildHttpClient = (defaultHeaders = {}) => {
  // wrapper for fetch
  return {
    get: async (url: string, headers = {}) => {
      const { data } = await axios.get(url, {
        headers: { ...defaultHeaders, ...headers },
      });
      return data;
    },

    post: async (url: string, body: any) => {},
    put: async (url: string, body: any) => {},
    delete: async (url: string) => {},
  };
};
