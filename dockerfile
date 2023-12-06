FROM node:latest
WORKDIR /app
COPY . .
RUN npm install 
RUN chown -R node /app
EXPOSE 8080
USER node
CMD ["sh", "-c", "sleep 10 && npm start"]