import axios from "axios";

/* Return background image URL given a search term */

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
