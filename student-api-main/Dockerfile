FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@7.5.6

RUN npm install --save-dev webpack

USER node

WORKDIR /home/node/app
