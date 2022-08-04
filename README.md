[![Deployment](https://github.com/zimekk/print/actions/workflows/deploy.yml/badge.svg)](https://github.com/zimekk/print/actions/workflows/deploy.yml)

# print

[zimekk.github.io/print](https://zimekk.github.io/print)

## install

```sh
nvm install v14 --with-intl=full-icu
npm i -g yarn
```

```sh
node -v # v16.13.0
yarn -v # 1.22.10
```

## run

```sh
yarn
yarn start # ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

## docker

```sh
docker-compose config # services:
docker-compose up --build # app_1  | ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

## hooks

```sh
yarn husky install
yarn husky add .husky/pre-commit "yarn pretty-quick --staged"
yarn husky add .husky/commit-msg "yarn commitlint --edit \$1"
```
