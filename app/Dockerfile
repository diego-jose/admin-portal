FROM node:alpine

RUN mkdir -p /app
RUN mkdir -p /app/src

WORKDIR     /app

COPY stryker-test/package.json  /app
COPY stryker-test/jest.config.js  /app
COPY stryker-test/stryker.conf.js  /app
COPY src/   /app/src

COPY src/config/setupTests.js   /app/src

RUN apk add --no-cache git
RUN git init 
RUN yarn install
RUN yarn add babel-preset-react-app

CMD ["yarn", "stryker", "run"]
