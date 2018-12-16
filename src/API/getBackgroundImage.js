import axios from "axios";

/**
 * Retrieve a background image URL given a search term.
 * @param {string} searchTerm
 * @returns {Promise<string>} A promise that contains a background image URL
 * string when fulfilled.
 */
const getBackgroundImage = searchTerm =>
  new Promise(resolve => {
    axios
      .get(
        `https://source.unsplash.com/random/${window.innerWidth}x${
          window.innerHeight
        }/?${searchTerm}`
      )
      .then(response => {
        resolve(response.request.responseURL);
      });
  });

export default getBackgroundImage;
