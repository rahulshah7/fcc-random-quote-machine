## Front End Libraries Projects - Build a Random Quote Machine

- **Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: [https://codepen.io/freeCodeCamp/full/qRZeGZ](https://codepen.io/freeCodeCamp/full/qRZeGZ).
- Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.
- You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
- **User Story #1:** I can see a wrapper element with a corresponding `id="quote-box"`.
- **User Story #2:** Within `#quote-box`, I can see an element with a corresponding `id="text"`.
- **User Story #3:** Within `#quote-box`, I can see an element with a corresponding `id="author"`.
- **User Story #4:** Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.
- **User Story #5:** Within `#quote-box`, I can see a clickable element with a corresponding `id="tweet-quote"`.
- **User Story #6:** On first load, my quote machine displays a random quote in the element with `id="text"`.
- **User Story #7:** On first load, my quote machine displays the random quote's author in the element with `id="author"`.
- **User Story #8:** When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.
- **User Story #9:** My quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element.
- **User Story #10:** I can tweet the current quote by clicking on the `#tweet-quote` `a` element. This `a` element should include the `"twitter.com/intent/tweet"` path in it's `href` attribute to tweet the current quote.
- **User Story #11:** The `#quote-box` wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
- You can build your project by forking [this CodePen pen](http://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`
- Once you're done, submit the URL to your working project with all its tests passing.
- Remember to use the [Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) method if you get stuck.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
