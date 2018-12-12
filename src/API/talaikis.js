import axios from "axios";

/* Return random quote data */

const talaikis = () =>
  new Promise(resolve => {
    axios.get("https://talaikis.com/api/quotes/random/").then(response => {
      const { author, cat: category, quote } = response.data;
      resolve({ author, category, quote });
    });
  });

export default talaikis;
