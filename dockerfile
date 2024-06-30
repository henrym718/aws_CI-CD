FROM node:latest
WORKDIR /app
ADD index.js package.json  ./
RUN npm install
EXPOSE 4001
ENTRYPOINT [ "node", "index.js" ]
