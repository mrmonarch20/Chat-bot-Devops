
FROM node:18
WORKDIR /app
COPY . .
RUN npm init -y && npm install express axios
EXPOSE 8080
CMD ["node", "index.js"]
