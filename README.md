# Storybook Example
This is an example repo to demonstrate [Storybook](https://storybook.js.org/), a UI development environment.
## Getting Started
First, clone the repo and navigate to the folder. In the CLI, run the following commands to get up and running:
```bash
nvm use 6 # create-react-app requires node v6 or higher
yarn
yarn storybook
```
Open your browser and go to `localhost:9001`. You should see the Storybook environment. You can play around with the components that already exist or write your own components using the data provided.

### Common pitfalls

* Storybook can be installed in a couple of ways. We suggest making sure you do [these steps](https://storybook.js.org/basics/guide-react/#add-storybookreact).
* Some addons are automatically included as part of the default Storybook package. For knobs, follow [these instructions](https://github.com/storybooks/storybook/tree/master/addons/knobs).