FROM node:alpine

LABEL org.opencontainers.image.source https://github.com/nmcc1212/TSI

WORKDIR /app

RUN apk --no-cache add git
RUN [ "git", "clone", "https://github.com/nmcc1212/TSI.git" ]

WORKDIR /app/TSI/intro\ to\ react/fun-with-react

RUN [ "npm", "install" ]

CMD [ "node", "rss-to-json.js"]