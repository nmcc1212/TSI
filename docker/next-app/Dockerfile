FROM node:alpine

LABEL org.opencontainers.image.source https://github.com/nmcc1212/TSI

WORKDIR /app

RUN apk --no-cache add git

RUN [ "git", "clone", "https://github.com/nmcc1212/TSI.git" ]

WORKDIR /app/TSI

RUN [ "npm", "install" ]

WORKDIR /app/TSI/next/news-aggregation

RUN [ "npm", "install" ]

CMD [ "npm", "run", "dev" ]