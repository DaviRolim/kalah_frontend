# develop stage
FROM node:17-alpine as develop-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install -g @quasar/cli
# COPY . .
# FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install -g @quasar/cli
COPY . .
# EXPOSE 80
# CMD ["quasar", "dev"]
# build stage
FROM develop-stage as build-stage
RUN npm install
RUN quasar build
# production stage
# FROM nginx:1.17.5-alpine as production-stage
# COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
CMD [ "http-server", "-p", "80", "dist/spa" ]