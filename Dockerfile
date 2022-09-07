FROM node:14

# WORKDIR /usr/src/app 

# COPY package*.json ./
# COPY tsconfig.json ./

# COPY ./src ./src 

# ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn add update
RUN yarn add typescript
RUN yarn add webpack
RUN yarn add webpack-dev-server
RUN yarn add karma protractor
RUN yarn install 
COPY . .

CMD yarn start:dev