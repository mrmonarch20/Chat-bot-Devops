
FROM node:18
WORKDIR /app
COPY . .
RUN npm init -y && npm install express
EXPOSE 5002
CMD ["node", "app.js"]
