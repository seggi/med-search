FROM node:16.13.1-alpine3.14 

WORKDIR /usr/src/app 

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./src ./src 

RUN yarn install

CMD yarn start:dev