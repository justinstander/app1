[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4dda0777626d40e4802bb14351e214b5)](https://www.codacy.com/manual/justinstander/app1?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=justinstander/app1&amp;utm_campaign=Badge_Grade)

| dev                                                                                                                                                                                                                                                                                                                                     | master                                                                                                                                                                                                                                                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![AWS CodeBuild Badge for Dev](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoidkpJcWIrdmJzajlDYlBOM2E1TjZ2RGZjL0JyN1Nia1F2aEpXcTNGT01CUXBGM0w2VkdQRFRnajA5amlUcXQxQ2RwTTZja1gxSmZkNmx1eVBQWmMrYnBvPSIsIml2UGFyYW1ldGVyU3BlYyI6ImRSaVNvaWVaSW5nWFo2ZkMiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&amp;branch=dev) | ![AWS CodeBuild Badge for Master](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoidkpJcWIrdmJzajlDYlBOM2E1TjZ2RGZjL0JyN1Nia1F2aEpXcTNGT01CUXBGM0w2VkdQRFRnajA5amlUcXQxQ2RwTTZja1gxSmZkNmx1eVBQWmMrYnBvPSIsIml2UGFyYW1ldGVyU3BlYyI6ImRSaVNvaWVaSW5nWFo2ZkMiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&amp;branch=master) |

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment Variables

Required.

```
AWS_S3_BUCKET=bucket
AWS_CLOUDFRONT_DISTRIBUTION_ID=XXXXXXXXXXXXXX
REACT_APP_GA_ID=UA-xxxxxxxxx-x
AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXX 
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build-test`

Runs all tests and exits.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn sync`

Synchronizes the latest build (`./build`) with your AWS S3 bucket.

### `yarn invalidate`

Invalidates your AWS CloudFront cache.

### `yarn deploy`

Useful for running the whole CI sequence locally. `yarn test` is automated and run on pull requests. `yarn build`, `yarn sync`, and `yarn invalidate` are automated through AWS CodePipeline.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
