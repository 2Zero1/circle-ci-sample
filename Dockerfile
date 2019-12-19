From node:12.14.0

WORKDIR /u/app

COPY package.json .
COPY package-lock.json .

RUN npm i --production

COPY app.js .