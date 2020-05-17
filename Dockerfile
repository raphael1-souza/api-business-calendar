FROM node:10

WORKDIR /usr/app

COPY package.json .

RUN yarn install

COPY ./src/ .

EXPOSE 3333
