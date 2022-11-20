FROM node:alpine3.15
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
CMD ["npm","start"]
EXPOSE 3000