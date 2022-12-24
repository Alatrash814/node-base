FROM node:19.3.0 AS base

RUN apt-get update &&\
    apt-get install -y

WORKDIR /application
COPY package*.json ./

RUN npm install

COPY . ./

# production
FROM base AS production

RUN npm run build

# development
FROM base AS development

EXPOSE 8001
CMD [ "npm", "run", "start" ]