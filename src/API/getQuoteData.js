import axios from "axios";
const endpoint = "https://randomquote-api.herokuapp.com/api/random-quote";
const offlineQuotes = require("./offlineQuotes.json");

/**
 * Retrieve a random quote.
 * @returns {Promise<object>} A promise that contains a quote object when
 * fulfilled.
 */
const getQuoteData = () =>
  new Promise(resolve => {
    axios
      .get(endpoint)
      .then(response => {
        const { author, category, quote } = response.data;
        resolve({ author, category, quote });
      })
      .catch(() => {
        resolve(
          offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)]
        );
      });
  });

export default getQuoteData;
