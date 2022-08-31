FROM node:14

# WORKDIR /usr/src/app 

# COPY package*.json ./
# COPY tsconfig.json ./

# COPY ./src ./src 

# ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --production --silent && mv node_modules ../
COPY . .


CMD yarn start:dev