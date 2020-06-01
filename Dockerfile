FROM node:13-alpine3.10

WORKDIR /usr/app

COPY package.json yarn.* ./

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev:server" ]
