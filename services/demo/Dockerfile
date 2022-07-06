FROM node:16-alpine AS build-stage

ENV INSTALL_PATH /usr/src/app
WORKDIR $INSTALL_PATH

COPY package* .
COPY ./services/demo/package.json ./services/demo/package.json

RUN npm ci

COPY ./services/demo ./

EXPOSE 3001
ENTRYPOINT [ "node", "src/app.js" ]