# Stage 1 - Build the React app
FROM node:14.15.4-alpine3.10 as react-build

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

# Bundle app source
COPY . .

RUN npm run build:a
RUN npm run build:b

# Stage 2 - Serve build for production with Nginx
FROM nginx:alpine

COPY --from=react-build /usr/src/app/build /usr/share/nginx/html

COPY --from=react-build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
