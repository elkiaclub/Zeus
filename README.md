# Zeus
Next-gen god-like app.

## Requirements

- node
- npm
- yarn
- mysql database

## Installation

```bash
yarn install
cp src/Config/config.example.ts src/Config/config.ts
```

Then fill the `src/Config/config.ts` file with your configuration.

## Running the app

```bash
yarn build
yarn start
```

App will be available at `http://localhost:port` based on the port you fill in `config.ts`.

## Development

```bash
# auto compile typescript files
yarn dev

# auto copy static files
yarn dev-static
```
