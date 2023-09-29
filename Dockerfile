FROM node:16-alpine as development

WORKDIR /usr/src

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=producction
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src

COPY package*.json .

RUN npm i --producction

COPY --from=development /usr/src/dist ./dist

CMD ["node", "dist/app.js"]