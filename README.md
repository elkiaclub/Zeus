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
cp ormconfig.example.json ormconfig.json
cp example.env .env
```

Fill your ormconfig.json with database credentials and .env with configuration details

## Running the app

```bash
yarn build
yarn start
```

App will be available at http://localhost:3000

## Development

```bash
# auto compile typescript files
yarn dev

# auto copy static files
yarn dev-static
```