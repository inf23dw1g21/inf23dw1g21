####### MYSQL ########
FROM mysql:latest
RUN chown -R mysql:root /var/lib/mysql
ENV MYSQL_DATABASE: webhoster
ENV MYSQL_ROOT_PASSWORD: secret
ENV MYSQL_PASSWORD: secret

ADD ./database/m2_webhoster.sql etc/mysql/m2_webhoster.sql

RUN sed -i 's/MYSQL_DATABASE/'${MYSQL_DATABASE:webhoster}'/g' /etc/mysql/m2_webhoster.sql
RUN cp /etc/mysql/m2_webhoster.sql /docker-entrypoint-initdb.d

EXPOSE 3306

####### NODE JS ######
FROM node:latest
WORKDIR /app
COPY . .
RUN npm install 
RUN chown -R node /app
EXPOSE 8080
USER node
CMD ["sh", "-c", "sleep 10 && npm start"]
