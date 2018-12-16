import axios from "axios";

/**
 * Retrieve a random quote.
 * @returns {Promise<object>} A promise that contains a quote object when
 * fulfilled.
 */
const getQuoteData = () =>
  new Promise(resolve => {
    axios.get("https://talaikis.com/api/quotes/random/").then(response => {
      const { author, cat: category, quote } = response.data;
      resolve({ author, category, quote });
    });
  });

export default getQuoteData;
