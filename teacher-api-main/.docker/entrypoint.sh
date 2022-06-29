#!/bin/bash

npm install

npm run typeorm migration:run

npm i --save @nestjs/config

npm run start:dev