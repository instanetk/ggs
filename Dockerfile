FROM node:14.15.4-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci 

# Bundle app source
COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

# SERVE BUILD INSTEAD <<< 

CMD [ "serve", "-s", "build", "-1", "3000" ]