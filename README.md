# Storybook Example - Pokédex
This is an example repo to demonstrate [Storybook](https://storybook.js.org/), a UI development environment.
## Getting Started
First, clone the repo and navigate to the folder. In the CLI, run the following commands to get up and running:
```
nvm use
yarn
yarn storybook
```
Open your browser and go to `localhost:9000`. You should see the Storybook environment. You can play around with the components that already exist or write your own components using the data provided.

For this repo, we're using v2 of [pokéAPI](https://pokeapi.co/). Keep in mind that this API restricts the number of requests to 300 a day per IP address per resource, which should be more than enough for your development needs. A select number of responses from this API have been saved in `.json` format for your use.