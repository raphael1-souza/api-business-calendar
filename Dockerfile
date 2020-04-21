FROM node:10

WORKDIR /usr/app

COPY package.json .

RUN yarn --quiet

COPY ./src/ .
