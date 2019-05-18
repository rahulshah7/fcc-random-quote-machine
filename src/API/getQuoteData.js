import axios from "axios";
const endpoint = "https://randomquote-api.herokuapp.com/api/random-quote";

/**
 * Retrieve a random quote.
 * @returns {Promise<object>} A promise that contains a quote object when
 * fulfilled.
 */
const getQuoteData = () =>
  new Promise(resolve => {
    axios.get(endpoint).then(response => {
      const { author, category, quote } = response.data;
      resolve({ author, category, quote });
    });
  });

export default getQuoteData;
