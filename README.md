# Products API

A simple API REST project for a CRUD of products using TS

## install dependencies

After clone repository intall dependencies

```bash
npm install
```

## config environment vars

Firts copy the .env.template file

```cp .env.template .env```

Then fill the values for each environment var like PORT, MONGO_URL

## Run app in development mode

firts run the typescript compiler in a terminal

```bash
npm run tsc
```

Then in a second terminal run the app in dev mode

```bash
npm run dev
```

## start app in prod mode

```bash
npm start
```

## EndPoints

[Documentation](https://documenter.getpostman.com/view/20772701/2s9YJaX3u2)

products

GET ```/api/products``` get all products
POST ```/api/products``` create a product
GET ```/api/products/:id``` get a product by id
PATCH ```/api/products/:id``` update a product by id
DELETE ```/api/products/:id``` delete a product by id

tags

GET ```/api/tags``` get all tags
POST ```/api/tags``` create a tag
GET ```/api/tags/:id``` get a tag by id
PATCH ```/api/tags/:id``` update a tag by id
DELETE ```/api/tags/:id``` delete a tag by id

history

GET ```/api/history``` get general history
GET ```/api/history/:id``` get product history

Enjoy!
