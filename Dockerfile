FROM node:14

WORKDIR /usr/src/app 

COPY package*.json ./
COPY tsconfig.json ./

COPY ./src ./src 

RUN yarn install

CMD yarn start:dev