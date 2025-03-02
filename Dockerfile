FROM node:18-alpine

WORKDIR /app

COPY mycalculator/package*.json ./
COPY mycalculator/controller/package*.json ./controller/

RUN npm install && cd controller && npm install

COPY mycalculator ./

RUN npm run build

EXPOSE 3000 5000

CMD (cd controller && node server.js &) && npx serve -s build
